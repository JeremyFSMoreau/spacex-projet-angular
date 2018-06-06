import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
    selector: 'app-rocket',
    templateUrl: './rocket-details.component.html',
    styleUrls: ['./rocket-details.component.css']
})
export class RocketDetailsComponent implements OnInit {
    rocket: Rocket;

    constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) {
        const id = route.snapshot.paramMap.get('id');
        this.spacexApi.getRocket(id).subscribe(data => {
            this.rocket = data;
        });
    }

    ngOnInit() {
    }

}
