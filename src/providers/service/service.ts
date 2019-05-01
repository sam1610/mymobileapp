import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ServiceProvider {

  ApiUrl="assets/countries.json";
  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }
  getData(){
    return this.http.get(this.ApiUrl);
  }
}
