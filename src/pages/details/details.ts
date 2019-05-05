// details.ts
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { AnyARecord } from 'dns';
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
location:any;
weather:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private  service:ServiceProvider) {
//notice that cte is the object key value trasmitted from home.ts 
this.location=  this.navParams.data.cte ;
console.log(this.location);

  
    this.service.getWeather(this.location.city + "," + this.location.country)
      .subscribe(data => {
        this.weather = data;
 
        console.log(this.weather);
        
      });
    }
 }

