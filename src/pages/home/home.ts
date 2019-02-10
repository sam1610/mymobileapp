import { WeatherProvider } from './../../providers/weather/weather';
import { HttpClient } from '@angular/common/http';
import { Countries } from './../../shared/Countries';
import { AboutPage } from './../about/about';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  reorderT = true;
  weatherApp = " weather Application ";
  contactsImg = "/assets/imgs/contactsImg.jpg";
  userName = "";
  countries: any;
  countRec:number;
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toasCtrl: ToastController,
    private weatherProvider: WeatherProvider, http: HttpClient) {

  }
  ngOnInit() {
    this.weatherProvider.getData().subscribe(
      data => 
        {
          this.countries = data as Countries[];
           //Object.keys(this.countries).length;
           this.countRec=this.countries.length;
          console.log(this.countries[1].city, " ", this.countRec);
          
        })
  }

  aboutLocation() {
    this.navCtrl.push(AboutPage);
  }
  detailLocation(item, i) {
    console.log(item, i);
    this.navCtrl.push(DetailsPage, { cte: item })
  }
  deleteLocation(item, i) {
    this.countries.splice(i, 1);
    let toast = this.toasCtrl.create({
      message: item.city  + " Location Deleted",
      duration: 2000
    });
    toast.present();
    this.countRec= this.countries.length ;

  }
  toggle() {
    this.reorderT = !this.reorderT;
  }
  Reorder($event) {
    reorderArray(this.countries, $event)
  }
  addLocation() {
    let addCte = this.alertCtrl.create({
      title: "add Location",
      message: "Enter a New Location Here",
      inputs: [
        {
          type: "text",
          name: "City"
        },
        {
          type: "text",
          name: "Country"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add",
          handler: (newLocation) => {
            this.countries.push(
              {
                "country": newLocation.Country,
                "city": newLocation.City
              }
            );
            this.countRec= this.countries.length ;

          }
        }
      ]
    });
    addCte.present();
  }
}
