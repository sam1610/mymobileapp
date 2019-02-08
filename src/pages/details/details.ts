import { ServiceCountries } from './../../services/service-countries';
// details.ts
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
contactDetails:any;
weather:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private weatherS:ServiceCountries) {
    //notice that cte is the object key value trasmitted from home.ts 
this.contactDetails=  this.navParams.data.cte ;
this.weatherS.getWeather(this.contactDetails).subscribe(
  data=> { this.weather=data.current_observation;
    console.log(this.weather);
    
  }
)
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
}
