import { Countries } from './../shared/Countries';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceCountriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceCountries {
  countries=[
    {country:"bahrain", city:"manama"},
    {country:"FL", city:"miami"},
    {country:"KSA", city:"riyad"},
   ];
  constructor(public http: HttpClient) {
    console.log('Hello ServiceCountriesProvider Provider');
  }
getData(){
  return  this.countries; 
}
 
}
