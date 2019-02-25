// home.ts
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weatherApp =" Weather  Application ";
  flag="/assets/imgs/flag.png";
  countRec:number;
  countriesArray=[
   {"country": "bahrain", "city": "manama" },
   {"country": "FL", "city": "miami"},
   {"country": "KSA", "city": "riyad"  },
   {"country": "Egypt", "city": "Cairo"}
  ];
  constructor(public navCtrl: NavController,
    private alertCtrl:AlertController) {
  }
  aboutApp(){
    this.navCtrl.push(AboutPage);
  }
  detailLocation(item , i ){
    console.log(item , i );
    this.navCtrl.push(DetailsPage, {cte:item})
  }
  addLocation() {
    let addLocation = this.alertCtrl.create({
      title: "Location",
      message: "Enter a New Location",
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
          handler: (newLocation) => {
            this.countriesArray.push(
              {
                "country": newLocation.Country,
                "city": newLocation.City
              }
            );
            this.countRec= this.countriesArray.length ;

          }
        }
      ]
    });
    addLocation.present();
  }
}
