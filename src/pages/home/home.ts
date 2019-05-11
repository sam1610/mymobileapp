import { DetailsPage } from './../details/details';
import { ServiceProvider } from '../../providers/git/serviceProvider';

import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  users: any;
  constructor(private service: ServiceProvider, private navCtrl: NavController) { }

  ngOnInit() {
    return this.service.getUser()
      .subscribe(
        data => {
          this.users = data;
          console.log(this.users);
        }
      );}
      
      detail(subscriptions) {
        this.navCtrl.push(DetailsPage, { item: subscriptions });
      }
}
