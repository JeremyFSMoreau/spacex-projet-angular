import { Component, OnInit, Input } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
    selector: 'app-rocket',
    templateUrl: './rockets.component.html',
    styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
    @Input() rocket: Rocket;
    rockets: Rocket[];

    constructor(private spacexApi: SpacexApiService) {
        this.spacexApi.getRockets().subscribe(data => {
            this.rockets = data;
        });
    }

    ngOnInit() {
    }

}
