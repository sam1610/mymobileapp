// home.ts
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 weatherApp :string =" Weather Mobile  Application ";
 flag :string ="/assets/imgs/flag.png";
 userName: string="";
countriesArray=[
  {"country": "bahrain", "city": "manama" },
  {"country": "FL", "city": "miami"},
  {"country": "KSA", "city": "riyad"  },
 ];
  constructor(public navCtrl: NavController) {
  }
  aboutApp(){
    this.navCtrl.push(AboutPage);
  }
}
