export interface Claim {
  id: string;
  patientId: string;
  patientName: string;
  dob: string;
  gender: string;
  dos: string;
  provider: string;
  facility: string;
  icd: string;
  desc: string;
  cpt: string;
  cptDesc: string;
  amt: number;
  status: 'Paid' | 'Denied' | 'Pending';
  type: string;
}
