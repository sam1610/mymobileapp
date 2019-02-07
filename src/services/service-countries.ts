import { Countries } from './../shared/Countries';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceCountries {
  countriesUrl:any = "/assets/countries.json";
  constructor(public httpclient: HttpClient) {
    console.log(this.countriesUrl);}
getData(): Observable<Countries[]>{
  return  this.httpclient.get<Countries[]>(this.countriesUrl);
  }
}
