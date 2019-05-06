import { HttpClient } from '@angular/common/http';
// details.ts
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  subscriptions:any
  constructor( public navParams: NavParams, private http:HttpClient) {
  //notice that cte is the object key value trasmitted from home.ts 
  this.http.get(this.navParams.data.item).subscribe(
    data=> this.subscriptions= data )}
}