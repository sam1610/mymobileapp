import { HttpClient } from '@angular/common/http';
import { ServiceCountries } from './../../services/service-countries';
import { Countries } from './../../shared/Countries';
// home.ts
import { AboutPage } from './../about/about';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  reorderT = true;
  contacts = " Constacts Application ";
  contactsImg = "/assets/imgs/contactsImg.jpg";
  userName = "";
  countries$: any;
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toasCtrl: ToastController,
    private countryService: ServiceCountries, http: HttpClient) {

  }

  ngOnInit() {


    this.countries$ =this.countryService.getData();
  }
  aboutContacts() {
    this.navCtrl.push(AboutPage);
  }
  detailContact(item, i) {
    console.log(item, i);
    this.navCtrl.push(DetailsPage, { cte: item })
  }
  deleteContact(item, i) {
    this.countries.splice(i, 1);
    let toast = this.toasCtrl.create({
      message: item.Name + " Contact Deleted",
      duration: 2000
    });
    toast.present();
  }
  toggle() {
    this.reorderT = !this.reorderT;
  }
  Reorder($event) {
    reorderArray(this.countries, $event)
  }
  addContact() {
    let addCte = this.alertCtrl.create({
      title: "add Contact",
      message: "Enter a New Contact Here",
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
          handler: (newContact) => {
            this.countries.push(
              {
                "country": newContact.Country,
                "city": newContact.City
              }
            )
          }
        }
      ]
    });
    addCte.present();
  }
}
