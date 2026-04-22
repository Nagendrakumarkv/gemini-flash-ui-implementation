import { Component } from '@angular/core';
import { Claim } from '../../../models/claim.model';

@Component({
  selector: 'app-claims-table',
  templateUrl: './claims-table.component.html',
  styleUrls: ['./claims-table.component.scss'],
  standalone: false
})
export class ClaimsTableComponent {
  claims: Claim[] = [
    { id: 'CLM-001', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '09/14/2024', provider: 'Dr. Sarah Chen, MD', facility: 'Northview Medical', icd: 'E11.65', desc: 'T2DM with Hyperglycemia', cpt: '99215', cptDesc: 'Office Visit', amt: 245.00, status: 'Paid', type: 'Professional' },
    { id: 'CLM-002', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '09/14/2024', provider: 'Dr. Sarah Chen, MD', facility: 'Northview Medical', icd: 'I50.22', desc: 'Chronic Systolic HF', cpt: '93000', cptDesc: 'ECG', amt: 85.00, status: 'Paid', type: 'Professional' },
    { id: 'CLM-003', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '08/22/2024', provider: 'Dr. James Wilson', facility: 'Wilson Cardio', icd: 'I10', desc: 'Hypertension', cpt: '99214', cptDesc: 'Office Visit', amt: 180.00, status: 'Denied', type: 'Professional' }
  ];

  isColSelectorOpen = false;
  groupBy: string = 'Provider';

  toggleColSelector() {
    this.isColSelectorOpen = !this.isColSelectorOpen;
  }
}
