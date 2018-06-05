import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../spacex-api.service';

@Component({
  selector: 'app-company-infos',
  templateUrl: './company-infos.component.html',
  styleUrls: ['./company-infos.component.css']
})
export class CompanyInfosComponent implements OnInit {
  companyInfos: any;

  constructor(private spacexApi: SpacexApiService) { 
    this.spacexApi.getCompanyInfos().subscribe(data =>
    this.companyInfos = data);
  }

  ngOnInit() {
    console.log(this.companyInfos);
  }

}
