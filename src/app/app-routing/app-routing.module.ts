import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MissionsComponent } from '../missions/missions.component';
import { CompanyInfoComponent } from '../company-info/company-info.component';
import { LaunchpadComponent } from '../launchpad/launchpad.component';

const appRoutes: Routes = [
  { path: 'missions', component: MissionsComponent },
  { path: 'companyInfo', component: CompanyInfoComponent },
  { path: 'launchpads', component: LaunchpadComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
