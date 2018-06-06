import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MissionsComponent } from './missions/missions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menuItems = [
    {
      name: 'Missions',
      path: '/missions'
    },
    {
        name: 'Rockets',
        path: '/rockets'
    },
    {
      name: 'Company info',
      path:  '/companyInfo'
    },
    {
      name: 'Capsules',
      path: '/capsuleInfo'
    },
    {
      name: 'Launchpads',
      path:  '/launchpads'
    }
  ];

  constructor(private router: Router) {
  }

  goToMissionsPage() {
    this.router.navigate(['/missions']);
  }
}
