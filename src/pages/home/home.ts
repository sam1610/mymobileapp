import { HttpClient } from '@angular/common/http';
import { Countries } from './../../shared/Countries';
// home.ts
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
  contacts = " Constacts Application ";
  contactsImg = "/assets/imgs/contactsImg.jpg";
  userName = "";
  countries: any;
  countRec:number;
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toasCtrl: ToastController,
    private http:HttpClient) {

  }


  ngOnInit() {
    this.http.get("/assets/countries.json").subscribe(
      data => {this.countries=data;
     this.countRec=this.countries.length}
    )

  }

  aboutContacts() {
    this.navCtrl.push(AboutPage);
  }
  detailContact(item) {
    console.log(item);
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
          name: "City",
          placeholder: "City"
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
            this.countries.push(
              {
                "country": newContact.Country,
                "city": newContact.City
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
