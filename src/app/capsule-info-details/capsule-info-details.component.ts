import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
  selector: 'app-capsule-info-details',
  templateUrl: './capsule-info-details.component.html',
  styleUrls: ['./capsule-info-details.component.css']
})
export class CapsuleInfoDetailsComponent implements OnInit {

  capsuleInfo: CapsuleInfo;
  
      constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) {
          const id = route.snapshot.paramMap.get('id');
          this.spacexApi.getCapsuleInfoDetails(id).subscribe(data => {
              this.capsuleInfo = data;
          });
      }

  ngOnInit() {
  }

}