export interface Encounter {
  id: string;
  dos: string;
  provider: string;
  facility?: string;
  status: 'done' | 'pending' | 'new';
  tags?: string[];
}
