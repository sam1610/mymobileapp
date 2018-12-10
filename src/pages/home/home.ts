import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 contacts =" Constacts Application ";
  constructor(public navCtrl: NavController) {

  }

}
