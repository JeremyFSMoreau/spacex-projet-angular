import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';
import { LaunchEndpoints } from '../Services/LaunchEndpoints';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  nextLaunches: Launch[];
  pastLaunches: Launch[];

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.GetMissions<Launch[]>(LaunchEndpoints.Upcoming, {id: true, order: 'desc'}).subscribe(data => {
      this.nextLaunches = data;
    });
    this.spacexApi.GetMissions<Launch[]>(LaunchEndpoints.All, {id: true, order: 'desc'}).subscribe(data => {
      this.pastLaunches = data;
    });
  }

  ngOnInit() {
  }

}
