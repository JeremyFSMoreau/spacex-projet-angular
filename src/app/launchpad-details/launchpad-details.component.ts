import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
  selector: 'app-launchpad-details',
  templateUrl: './launchpad-details.component.html',
  styleUrls: ['./launchpad-details.component.css']
})
export class LaunchpadDetailsComponent implements OnInit {
  launchpad: Launchpad;

  constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) {
    const id = route.snapshot.paramMap.get('id');
    this.spacexApi.getLaunchpadDetails(id).subscribe(data => {
        this.launchpad = data;
    });
}

  ngOnInit() {
  }

}
