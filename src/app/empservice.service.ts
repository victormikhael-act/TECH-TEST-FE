import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(    private http: HttpClient) { }

  public getEmp(methodeName :any ,options?: any) {
    const baseUrl = 'https://617aea45cb1efe00170100ad.mockapi.io/api/employees';
    console.log('baseUrl : ' + baseUrl)
    return this.http.get(baseUrl, options).toPromise();
  }
}

