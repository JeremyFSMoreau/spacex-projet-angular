import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MissionsComponent } from '../missions/missions.component';
import { CompanyInfoComponent } from '../company-info/company-info.component';
import { CapsuleInfoComponent } from '../capsule-info/capsule-info.component';
import { CapsuleInfoDetailsComponent } from '../capsule-info-details/capsule-info-details.component';
import { LaunchpadComponent } from '../launchpad/launchpad.component';
import { RocketsComponent } from '../rockets/rockets.component';
import { RocketDetailsComponent } from '../rocket-details/rocket-details.component';
import { LaunchpadDetailsComponent } from '../launchpad-details/launchpad-details.component';
import { HomepageComponent } from '../homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'missions', component: MissionsComponent },
  { path: 'companyInfo', component: CompanyInfoComponent },
  { path: 'capsuleInfo', component: CapsuleInfoComponent }, 
  { path: 'capsuleInfo/:id', component: CapsuleInfoDetailsComponent },   
  { path: 'launchpads', component: LaunchpadComponent },
  { path: 'launchpads/:id', component: LaunchpadDetailsComponent },
  { path: 'rockets', component: RocketsComponent },
  { path: 'rockets/:id', component: RocketDetailsComponent }
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
