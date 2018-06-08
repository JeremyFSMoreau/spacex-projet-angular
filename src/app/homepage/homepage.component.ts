import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  nextLaunch: Launch;
  nextLaunchDate: string;
  constructor(private spacexApi: SpacexApiService) {
      this.spacexApi.getNextLaunch().subscribe(data => {
          this.nextLaunch = data;
          this.nextLaunchDate = new Date(this.nextLaunch.launch_date_utc).toDateString();
      });
  }

  ngOnInit() {
      document.body.classList.add('bg-img');
  }

}
