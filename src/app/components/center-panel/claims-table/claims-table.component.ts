import { Component } from '@angular/core';
import { Claim } from '../../../models/claim.model';

@Component({
  selector: 'app-claims-table',
  templateUrl: './claims-table.component.html',
  styleUrls: ['./claims-table.component.scss'],
  standalone: false
})
export class ClaimsTableComponent {
  allClaims: Claim[] = [
    { id: 'CLM-001', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '09/14/2024', provider: 'Dr. Sarah Chen, MD', facility: 'Northview Medical', icd: 'E11.65', desc: 'T2DM with Hyperglycemia', cpt: '99215', cptDesc: 'Office Visit', amt: 245.00, status: 'Paid', type: 'Professional' },
    { id: 'CLM-002', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '09/14/2024', provider: 'Dr. Sarah Chen, MD', facility: 'Northview Medical', icd: 'I50.22', desc: 'Chronic Systolic HF', cpt: '93000', cptDesc: 'ECG', amt: 85.00, status: 'Paid', type: 'Professional' },
    { id: 'CLM-003', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '08/22/2024', provider: 'Dr. James Wilson', facility: 'Wilson Cardio', icd: 'I10', desc: 'Hypertension', cpt: '99214', cptDesc: 'Office Visit', amt: 180.00, status: 'Denied', type: 'Professional' },
    { id: 'CLM-004', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '07/22/2024', provider: 'Dr. Sarah Chen, MD', facility: 'Northview Medical', icd: 'E11.9', desc: 'Type 2 Diabetes', cpt: '99213', cptDesc: 'Office Visit', amt: 150.00, status: 'Paid', type: 'Professional' },
    { id: 'CLM-005', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '05/10/2024', provider: 'Dr. Kim, MD', facility: 'Kim Specialists', icd: 'N18.3', desc: 'CKD Stage 3a', cpt: '99214', cptDesc: 'Office Visit', amt: 195.00, status: 'Paid', type: 'Professional' },
    { id: 'CLM-006', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '03/01/2024', provider: 'Dr. Sarah Chen, MD', facility: 'Northview Medical', icd: 'I10', desc: 'Essential Hypertension', cpt: '99215', cptDesc: 'Office Visit', amt: 210.00, status: 'Pending', type: 'Professional' },
    { id: 'CLM-007', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '01/15/2024', provider: 'Dr. James Wilson', facility: 'Wilson Cardio', icd: 'I25.10', desc: 'ASHD of native coronary artery', cpt: '93000', cptDesc: 'ECG', amt: 95.00, status: 'Denied', type: 'Professional' }
  ];

  activeFilter: string = 'All';
  isColSelectorOpen = false;
  isFullscreen = false;
  groupBy: string = 'Provider';

  get claims(): Claim[] {
    if (this.activeFilter === 'All') return this.allClaims;
    return this.allClaims.filter(c => c.status === this.activeFilter);
  }

  setFilter(status: string) {
    this.activeFilter = status;
  }

  toggleColSelector() {
    this.isColSelectorOpen = !this.isColSelectorOpen;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}
