import { ServiceCountries } from './../../services/service-countries';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import "rxjs/operator/map";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
contactDetails:any;
weather:any;
available:boolean;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private weatherS:ServiceCountries) {
    //notice that cte is the object key value trasmitted from home.ts 
this.contactDetails=  this.navParams.data.cte ;
this.weatherS.getWeather(this.contactDetails)
.subscribe(
  data=> { this.weather=data;
    console.log(data);  
    this.available=true;
  },
  err=>{
      console.log(err);
      this.available=false;
      
  }
)
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
}
