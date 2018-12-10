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
}
