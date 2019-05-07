import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {
  CntUrl="/assets/countries.json";
  constructor(public http: HttpClient) {
    
  }
  getCountries(){
    return  this.http.get(this.CntUrl);
  }

}
