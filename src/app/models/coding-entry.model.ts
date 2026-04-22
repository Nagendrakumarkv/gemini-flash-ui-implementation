export interface CodingEntry {
  id?: string;
  dos?: string;
  src?: string;
  conf?: string;
  notes?: string;
  opp?: string;
  desc?: string;
  [key: string]: any;
}

export interface HccEntry extends CodingEntry {
  icd: string;
  hcc: string;
  raf: string;
}

export interface GapEntry extends CodingEntry {
  icd: string;
  hcc: string;
  raf: string;
  status?: string;
}

export interface CptEntry extends CodingEntry {
  cpt: string;
  desc: string;
}

export interface CptGapEntry extends CodingEntry {
  cpt: string;
  desc: string;
  status?: string;
}
