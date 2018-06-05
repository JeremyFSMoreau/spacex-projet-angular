import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
  selector: 'app-capsule-info',
  templateUrl: './capsule-info.component.html',
  styleUrls: ['./capsule-info.component.css']
})
export class CapsuleInfoComponent implements OnInit {
  capsuleInfo: CapsuleInfo;

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getCapsuleInfo().subscribe(data => {
      this.capsuleInfo = data;
    });
  }
  ngOnInit() {
  }
}