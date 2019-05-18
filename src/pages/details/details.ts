// details.ts
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
location:any;
weather:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private  service:ServiceProvider, private toastCtrl:ToastController) {
//notice that cte is the object key value trasmitted from home.ts 
this.location=  this.navParams.data.cte ;
console.log(this.location);


this.service.getWeather(this.location.city + "," + this.location.country)
      .subscribe(data => {
        this.weather = data;
 
        console.log(this.weather);
        
      },
      (err)=> {
        let toast = this.toastCtrl.create({
          message: this.location.city + " dos not exist",
          duration: 2000
        });
        toast.onDidDismiss(()=>
         this.navCtrl.pop()       );
        toast.present();       });        
      };

 }

