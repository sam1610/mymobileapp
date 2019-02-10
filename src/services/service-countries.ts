import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceCountries {
  countriesUrl:any = "/assets/countries.json";
  constructor(public httpclient: HttpClient) {
    console.log(this.countriesUrl);}
getData(){
  return  this.httpclient.get(this.countriesUrl);
  }
}
