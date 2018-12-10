// details.ts
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
contactDetails:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //notice that cte is the object key value trasmitted from home.ts 
this.contactDetails=  this.navParams.data.cte ;
console.log(this.contactDetails);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
}
