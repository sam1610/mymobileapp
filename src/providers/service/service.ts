import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class ServiceProvider {
  ApiUrl="assets/countries.json";

  weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
  parameters = '&units=metric&appid=';
  apiKey = 'a3eae44c26370088bab40caa93a7ad68';

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');}
  getLocation(){
    return this.http.get(this.ApiUrl);
  }

  getWeather(city) {
    console.log(this.weatherAPI + city + this.parameters + this.apiKey);
    return this.http.get(this.weatherAPI + city + this.parameters + this.apiKey);
  }




}
