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
    }
    catch(err){
      this.message = 'Error server side';
    }


}
}
