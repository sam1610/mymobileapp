import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceCountries {
  ApIurl: string;
  apikey ='59d61e5d23ee4b65';
    constructor(public http: HttpClient) {
      this.ApIurl='http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
      console.log(this.ApIurl);
    }
  getWeather(item)
  {
    console.log(this.ApIurl + '/'+item.country +'/' +item.city +'.json');
    
    return this.http.get(this.ApIurl + '/'+item.country +'/' +item.city +'.json').map(
      res=> res.current_observation
    )

  
  }
}
