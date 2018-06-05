import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MissionsComponent } from '../missions/missions.component';
import { CompanyInfosComponent } from '../company-infos/company-infos.component';

const appRoutes: Routes = [
  { path: 'missions', component : MissionsComponent },
  { path: 'company-infos', component : CompanyInfosComponent }
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
