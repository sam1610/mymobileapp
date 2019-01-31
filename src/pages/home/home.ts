// home.ts
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 contacts =" Constacts Application ";
 contactsImg="../../assets/imgs/contactsImg.jpg";
 userName= "";
  constructor(public navCtrl: NavController) {
  }
  aboutContacts(){
    this.navCtrl.push(AboutPage);
  }
  getContacts(){
    return  [
      {Name:"Ahmed", id:1},
      {Name:"samir", id:2},
      {Name:"Ali", id:3}
     ]
  }
}
