import { Component } from '@angular/core';
import { Claim } from '../../../models/claim.model';

@Component({
  selector: 'app-claims-table',
  templateUrl: './claims-table.component.html',
  styleUrls: ['./claims-table.component.scss'],
  standalone: false
})
export class ClaimsTableComponent {
  allClaims: any[] = [
    { id: 'CLM-88401', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '09/14/24', provider: 'Dr. Chen', facility: 'Northview Medical', icd: 'E11.65, I50.22', desc: 'T2DM, Systolic HF', cpt: '99215', amt: 245.00, status: 'PAID', payer: 'UHC MA', raf: '0.670' },
    { id: 'CLM-88402', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '09/14/24', provider: 'Dr. Chen', facility: 'Northview Medical', icd: 'I50.22', desc: 'Chronic Systolic HF', cpt: '93000', amt: 85.00, status: 'PAID', payer: 'UHC MA', raf: '0.368' },
    { id: 'CLM-83902', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '05/10/24', provider: 'Dr. Kim', facility: 'Kim Specialists', icd: 'N18.3', desc: 'CKD Stage 3a', cpt: '99213', amt: 150.00, status: 'PAID', payer: 'Humana', raf: '0.236' },
    { id: 'CLM-90012', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '10/29/24', provider: 'Dr. Patel', facility: 'Patel Clinic', icd: 'I10', desc: 'Hypertension', cpt: '99215', amt: 180.00, status: 'PENDING', payer: 'UHC MA', raf: '0.000' },
    { id: 'CLM-86210', patientId: 'PID-001', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '07/22/24', provider: 'Dr. Williams', facility: 'Williams Center', icd: 'J44.1', desc: 'COPD Exacerbation', cpt: '99214', amt: 210.00, status: 'DENIED', payer: 'Aetna', raf: '0.335' }
  ];

  columnConfigs = [
    { key: 'id', label: 'Claim ID', visible: true },
    { key: 'patientId', label: 'Patient ID', visible: false },
    { key: 'patientName', label: 'Patient Name', visible: false },
    { key: 'dob', label: 'Date of Birth', visible: false },
    { key: 'gender', label: 'Gender', visible: false },
    { key: 'dos', label: 'Date of Service (DOS)', visible: true },
    { key: 'year', label: 'Claim Year', visible: false },
    { key: 'provider', label: 'Provider Name', visible: true },
    { key: 'npi', label: 'Provider NPI', visible: false },
    { key: 'facility', label: 'Facility Name', visible: false },
    { key: 'facilityType', label: 'Facility Type', visible: false },
    { key: 'type', label: 'Claim Type', visible: false },
    { key: 'icd', label: 'ICD-10 Codes', visible: true },
    { key: 'icdDesc', label: 'ICD Descriptions', visible: false },
    { key: 'cpt', label: 'CPT/HCPCS Codes', visible: true },
    { key: 'cptDesc', label: 'Procedure Descriptions', visible: false },
    { key: 'pos', label: 'Place of Service (POS)', visible: false },
    { key: 'status', label: 'Claim Status', visible: true },
    { key: 'payer', label: 'Payer Name', visible: true },
    { key: 'payerType', label: 'Payer Type', visible: false },
    { key: 'hcc', label: 'HCC Category Codes', visible: false },
    { key: 'rxhcc', label: 'RX-HCC Codes', visible: false },
    { key: 'raf', label: 'RAF Score Contribution', visible: true },
    { key: 'encType', label: 'Encounter Type', visible: false },
    { key: 'chronic', label: 'Chronic Condition Flag', visible: false },
    { key: 'audit', label: 'Audit Flag', visible: false },
    { key: 'source', label: 'Source System', visible: false },
    { key: 'updated', label: 'Last Updated', visible: false }
  ];

  activeFilter: string = 'All';
  isColSelectorOpen = true; // Open by default for this task
  isFullscreen = false;
  groupBy: string = 'Provider';

  get claims(): any[] {
    let filtered = this.allClaims;
    if (this.activeFilter !== 'All') {
      filtered = this.allClaims.filter(c => c.status === this.activeFilter.toUpperCase());
    }
    return filtered;
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

  isColumnVisible(key: string): boolean {
    const col = this.columnConfigs.find(c => c.key === key);
    return col ? col.visible : false;
  }
}
