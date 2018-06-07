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
  capsuleInfoArray;
//   capsuleInfoDetailsObject = [];
  
      constructor(private route: ActivatedRoute, private spacexApi: SpacexApiService) {
          const id = route.snapshot.paramMap.get('id');
          this.spacexApi.getCapsuleInfoDetails(id).subscribe(data => {
              this.capsuleInfo = data;
              this.capsuleInfoArray = this.spacexApi.generateArray(data);

            //   this.capsuleInfoArray.forEach(function(item, index, object){

            //     // console.log(typeof item.value);

            //     if(typeof item.value == 'object'){
            //         console.log(item);
            //         // this.capsuleInfoDetailsObject.push(item); 
            //         object.splice(index, 1);
            //     }
            //   });

            //   this.capsuleInfoArray.forEach(element => {
            //       if(typeof element.value === 'object'){
            //         this.capsuleInfoDetailsObject.push(element);                    
            //         this.capsuleInfoArray.splice(element.index, 1)
            //         //   delete this.capsuleInfoArray[element];
            //       }
            //   });
                 
              console.log(this.capsuleInfoArray);
            //   console.log(this.capsuleInfoDetailsObject);
                       
          });
      }

  ngOnInit() {
  }

}