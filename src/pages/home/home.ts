import { HttpClient } from '@angular/common/http';
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
  weatherApp = " Constacts Application ";
  contactsImg = "/assets/imgs/contactsImg.jpg";
  countries: any;
  countRec:number;
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toasCtrl: ToastController,
    private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get("/assets/countries.json").subscribe(
      data => 
        {
          this.countries = data ;
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
      message: item.city + " Location is Deleted",
      duration: 2000
    });
    this.countRec= this.countries.length ;
    toast.present();
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
