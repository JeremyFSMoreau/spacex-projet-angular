import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {
  launchpads: Launchpad[];

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getLaunchpad<Launchpad[]>().subscribe(data => {
      this.launchpads = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
