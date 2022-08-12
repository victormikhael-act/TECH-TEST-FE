import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpdetserviceService {

  constructor() { }
  emp:any
  sendData(emp:any) {
    console.log('Trans-data SUCCESS!1 - > ' + emp)
    this.emp = emp; 
  }

  getData(): any {
    console.log ('2')
    console.log('Trans-data SUCCESS!3 - > ' + this.emp)
    return this.emp;
  }
}
