// home.ts
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  reorderT=true;
 contacts =" Constacts Application ";
 contactsImg="../../assets/imgs/contactsImg.jpg";
 userName= "";
 contactsArray=[
  {Name:"Ahmed", id:1},
  {Name:"samir", id:2},
  {Name:"Ali", id:3}
 ];
  constructor(public navCtrl: NavController,
    private alertCtrl:AlertController) {
  }
  aboutContacts(){
    this.navCtrl.push(AboutPage);
  }
  detailContact(item , i ){
    console.log(item , i );
    this.navCtrl.push(DetailsPage, {cte:item})
  }
  toggle(){
    this.reorderT=!this.reorderT;
  }
  Reorder($event){
    reorderArray(this.contactsArray, $event)
  }
  addContact(){
    let addCte=this.alertCtrl.create({
      title:"add Contact",
      message :"Enter a New Contact Here",
      inputs:[
        {type:"text",
        name:"contactEntry"}
      ],
      buttons:[
        {
          text:"Cancel"
        },
        {
          text:"Add",
          handler:(newContact)=>{
            this.contactsArray.push(
              {id:this.contactsArray.length+1,
              "Name":newContact.contactEntry}
            )
          }
        }
      ]
    });
    addCte.present();
  }
}
