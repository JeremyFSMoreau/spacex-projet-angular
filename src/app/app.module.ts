import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MissionsComponent } from './missions/missions.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CapsuleInfoComponent } from './capsule-info/capsule-info.component';
import { LaunchComponent } from './launch/launch.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import {RocketsComponent} from './rockets/rockets.component';
import {RocketDetailsComponent} from './rocket-details/rocket-details.component';
import { LaunchpadDetailsComponent } from './launchpad-details/launchpad-details.component';
import { CapsuleInfoDetailsComponent } from './capsule-info-details/capsule-info-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';

@NgModule({
  declarations: [
    AppComponent,
    MissionsComponent,
    CompanyInfoComponent,
    CapsuleInfoComponent,
    LaunchComponent,
    LaunchpadComponent,
    LaunchComponent,
    RocketsComponent,
    RocketDetailsComponent,
    LaunchpadDetailsComponent,
    CapsuleInfoDetailsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CountdownTimerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
