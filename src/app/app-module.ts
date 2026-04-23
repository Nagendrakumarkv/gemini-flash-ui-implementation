import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { TopbarComponent } from './components/topbar/topbar.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { EncounterPanelComponent } from './components/encounter-panel/encounter-panel.component';
import { PdfViewerComponent } from './components/center-panel/pdf-viewer/pdf-viewer.component';
import { ClaimsTableComponent } from './components/center-panel/claims-table/claims-table.component';
import { CodingPanelComponent } from './components/coding-panel/coding-panel.component';
import { CodingTabContentComponent } from './components/coding-panel/coding-tab-content/coding-tab-content.component';
import { CodingEntryRowComponent } from './components/coding-panel/coding-entry-row/coding-entry-row.component';
import { OppLookupComponent } from './components/opp-lookup/opp-lookup.component';
import { ToastComponent } from './components/toast/toast.component';
import { MedicalCodeLookupComponent } from './components/medical-code-lookup/medical-code-lookup.component';

@NgModule({
  declarations: [
    App,
    TopbarComponent,
    WorkspaceComponent,
    EncounterPanelComponent,
    PdfViewerComponent,
    ClaimsTableComponent,
    CodingPanelComponent,
    CodingTabContentComponent,
    CodingEntryRowComponent,
    OppLookupComponent,
    ToastComponent,
    MedicalCodeLookupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
