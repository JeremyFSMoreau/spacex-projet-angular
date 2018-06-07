import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../Services/spacex-api.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  companyInfo: CompanyInfo;
  companyHistory: CompanyHistory

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getCompanyInfo().subscribe(data => {
      this.companyInfo = data;
    });

    this.spacexApi.getCompanyHistory().subscribe(data => {
      this.companyHistory = data;
    });

  }
  ngOnInit() {
  }
}