import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  nextLaunch: Launch[];

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getNextLaunch<Launch[]>().subscribe(data => {
      this.nextLaunch = data;
      console.log(this.nextLaunch);
    });
  }
  ngOnInit() {
  }

}
