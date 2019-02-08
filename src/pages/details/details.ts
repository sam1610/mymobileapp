import { ServiceCountries } from './../../services/service-countries';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import "rxjs/operator/map";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  contactDetails: any;
  weather: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, private weatherS: ServiceCountries,
    private toastCtrl: ToastController) {
    //notice that cte is the object key value trasmitted from home.ts 
    this.contactDetails = this.navParams.data.cte;
    //  this should be  a call to a separate function call underneath
    //   this.getData()
    //  noticed that current_bservation doesnot connect all time
    // so i have to use Observable 
    this.weatherS.getWeather(this.contactDetails)
      .subscribe(
        data => {
        this.weather = data;
          console.log(data);
          if (!data) {
            let toast = this.toastCtrl.create({
              message: "City Not Available",
              duration: 2000
            });
            toast.present();
            this.navCtrl.pop();

          }
        },
        err => {
          console.log("erreur ", err);
        }
      )

  }
}
