import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmpdetserviceService } from '../empdetservice.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(public empdetService:EmpdetserviceService) {}
emp:any
message='';
   ngOnInit() {
    try{console.log ('1')
      this.emp =  this.empdetService.getData();
      console.log ('3')
      console.log ('this.emp => ' + this.emp.lastName)
      var timeDiff = Math.abs(Date.now() - this.emp.dateOfBirth);
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
      this.emp.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
    catch(err){
      this.message = 'Error server side';
    }


}
}
