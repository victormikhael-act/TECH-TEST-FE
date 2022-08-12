import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { EmpserviceService } from '../empservice.service';
import { Router } from '@angular/router';
import { EmpdetserviceService } from '../empdetservice.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  message: string | undefined;

  constructor(public empservice: EmpserviceService,private router : Router, public empdetService:EmpdetserviceService) { }
empFetched :any;
checked= false;
  async ngOnInit(): Promise<void> {

      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
      try{
        this.empFetched = await this.empservice.getEmp('typusage', options);
        console.log ('this.typeUsage => ' + this.empFetched[1])
      }
      catch(err){
        this.message = 'Error server side';
      }


  }
  toggle(){
    this.checked = !this.checked;
    console.log('toggle')
  }

  async goEmpDet(emp:any){
    this.empdetService.sendData(emp);
    this.router.navigate(['/emp-det']);
  }
}
