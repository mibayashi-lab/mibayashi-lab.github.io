const researchmapSources = import.meta.glob('./rm_researchers*.jsonl', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const latestResearchmapSource = Object.entries(researchmapSources)
  .sort(([a], [b]) => b.localeCompare(a))[0]?.[1] ?? '';

export type PublicationType = 'journal' | 'conference' | 'domestic-conference';

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  venueGroup: string;
  publicationDate: string;
  firstAuthorMibayashi: boolean;
  year: number;
  type: PublicationType;
  refereed: boolean;
  link?: string;
  linkLabel?: string;
};

type ResearchmapValue = string | { ja?: string; en?: string } | undefined;
type ResearchmapPaper = {
  insert?: { type?: string; id?: string };
  merge?: {
    display?: string;
    paper_title?: ResearchmapValue;
    authors?: { ja?: Array<{ name: string }>; en?: Array<{ name: string }> };
    publication_date?: string;
    publication_name?: ResearchmapValue;
    published_paper_type?: string;
    starting_page?: string;
    ending_page?: string;
    volume?: string;
    number?: string;
    referee?: boolean;
    see_also?: Array<{ label?: string; '@id'?: string }>;
    dataset?: { access_url?: string };
  };
};

const text = (value: ResearchmapValue) =>
  typeof value === 'string' ? value : value?.ja ?? value?.en ?? '';

const classify = (paper: NonNullable<ResearchmapPaper['merge']>): PublicationType => {
  if (paper.published_paper_type === 'scientific_journal' || /論文誌|journal|transactions/i.test(text(paper.publication_name))) {
    return 'journal';
  }
  if (paper.published_paper_type === 'international_conference_proceedings') {
    return 'conference';
  }
  return 'conference';
};

const formatVenue = (paper: NonNullable<ResearchmapPaper['merge']>) => {
  const pages = paper.starting_page
    ? paper.ending_page
      ? `pp. ${paper.starting_page}–${paper.ending_page}`
      : paper.starting_page
    : '';
  const issue = paper.volume && paper.number ? `${paper.volume}(${paper.number})` : paper.volume ?? paper.number ?? '';
  return [text(paper.publication_name), issue, pages].filter(Boolean).join(', ');
};

const parsePaper = (record: ResearchmapPaper): Publication | null => {
  const paper = record.merge;
  const title = text(paper?.paper_title);
  const date = paper?.publication_date;
  if (!['published_papers', 'misc'].includes(record.insert?.type ?? '') || paper?.display !== 'disclosed' || !title || !date) return null;

  const authors = paper.authors?.ja ?? paper.authors?.en ?? [];
  const externalLink = paper.see_also?.find((item) => item['@id'])?.['@id'];
  return {
    title,
    authors: authors.map((author) => author.name).join(', '),
    venue: formatVenue(paper),
    venueGroup: text(paper.publication_name),
    publicationDate: date,
    firstAuthorMibayashi: /三林|mibayashi/i.test(authors[0]?.name ?? ''),
    year: Number(date.slice(0, 4)),
    type: record.insert?.type === 'misc' ? 'domestic-conference' : classify(paper),
    refereed: paper.referee === true,
    link: externalLink ?? paper.dataset?.access_url ?? `https://researchmap.jp/ryotamibayashi/${record.insert.type}/${record.insert.id}`,
    linkLabel: externalLink?.includes('doi.org') ? 'DOI' : paper.dataset?.access_url ? 'PDF' : 'researchmap',
  };
};

export const publications = latestResearchmapSource
  .trim()
  .split('\n')
  .map((line) => parsePaper(JSON.parse(line) as ResearchmapPaper))
  .filter((publication): publication is Publication => publication !== null)
  .sort((a, b) =>
    b.publicationDate.localeCompare(a.publicationDate)
    || a.venueGroup.localeCompare(b.venueGroup)
    || Number(b.firstAuthorMibayashi) - Number(a.firstAuthorMibayashi)
    || a.title.localeCompare(b.title),
  );

export const publicationGroups = [
  { key: 'journal', title: '論文誌' },
  { key: 'conference', title: '国際会議' },
  { key: 'domestic-conference', title: '国内会議' },
] as const;
