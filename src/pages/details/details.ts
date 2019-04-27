import { Weather } from './../../services/weather';
import { ServiceCountries } from './../../services/service-countries';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage implements OnInit {
  locationDetails: any;
  data: Weather;
  hum: any;
  pres: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, private weatherS: ServiceCountries,
    private toastCtrl: ToastController) {
    //notice that cte is the object key value trasmitted from home.ts 
    this.locationDetails = this.navParams.data.cte;
    //  this should be  a call to a separate function call underneath
    //   this.getData()
    //  noticed that current_bservation doesnot connect all time
    // so i have to use Observable 
  }

  ngOnInit(): void {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.weatherS.getWeather(this.locationDetails)
      .subscribe(
        (dt: Weather) =>
          this.data = dt);
    //     // this.tmp = this.data$.main.temp;
    //     // this.hum = this.data$.main.humidity;
    //     // this.pres=this.data$.main.pressure;
    //       if(!this.data) {
    //       let toast = this.toastCtrl.create({
    //         message: this.locationDetails.city + "  City Not Available",
    //         duration: 2000
    //       });
    //       toast.present();
    //       this.navCtrl.pop();
    //     }
    //   },
    //   err => {
    //     console.log("erreur ", err);
    //   }


  }


}
