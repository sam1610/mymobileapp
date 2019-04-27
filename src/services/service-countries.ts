import { Weather } from './weather';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { map } from  'rxjs/operators'

@Injectable()
export class ServiceCountries {
  ApIurl: string;
  apikey ='45098a1112cff8607ac743d6542dfeaf';
  // 91391e48b72006b91f798e0285949e8b

    constructor(public http: HttpClient) {
      // this.ApIurl="http://api.openweathermap.org/data/2.5/weather?q=" ;
    }
  getWeather(item):Observable<Weather>
  
  {
    this.ApIurl = `http://api.openweathermap.org/data/2.5/weather?q=${item.city}&units=metric&appid=${this.apikey}`;

  // console.log(this.ApIurl);
    console.log( this.http.get<Weather>(this.ApIurl).pipe(map( res=>{ return res.main})
    ))

   return this.http.get<Weather>(this.ApIurl).pipe(map( res=>{ return res.main})
    )
  }
}
