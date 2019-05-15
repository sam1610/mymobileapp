import { DataProvider } from './../../providers/data/data';
import { AboutPage } from './../about/about';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  reorderT = false;
  weaterApp = " Weather App ";
  flag = "/assets/imgs/flag.png";
  userName = "";
  countriesArray:any;
  countRec:number;
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toasCtrl: ToastController, private dataSrv: DataProvider) {  }


  ngOnInit() {
       this.dataSrv.getCountries().subscribe(
         data=> this.countriesArray=data
       ) ;
  }

  aboutContacts() {
    this.navCtrl.push(AboutPage);
  }
  detailContact(item, i) {
    console.log(item, i);
    this.navCtrl.push(DetailsPage, { cte: item })
  }
  deleteContact(item, i) {
   this.countriesArray.splice(i, 1);
    let toast = this.toasCtrl.create({
      message: item.city + " Location Deleted",
      duration: 2000
    });
    toast.present();
  }
  toggle() {
    this.reorderT = !this.reorderT;
  }
  Reorder($event) {
    reorderArray(this.countriesArray, $event)
  }
  addCountry() {
    let addCte = this.alertCtrl.create({
      title: "add Location",
      message: "Enter a New Location Here",
      inputs: [
        {
          type: "text",
          name: "City",
          placeholder:"City"
        },
        {
          type: "text",
          name: "Country",
          placeholder:"Country"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add",
          handler: (newContact) => {
            this.countriesArray.push(
              {
                "country": newContact.Country,
                "city": newContact.City
              }
            );
            this.countRec= this.countriesArray.length ;

          }
        }
      ]
    });
    addCte.present();
  }
}
