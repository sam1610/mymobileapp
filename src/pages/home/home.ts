import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 contacts =" Constacts Application ";
 contactsImg="../../assets/imgs/contactsImg.jpg";
  constructor(public navCtrl: NavController) {

  }

}
