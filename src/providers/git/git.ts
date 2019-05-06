import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GitProvider {
 ApiUrl="https://api.github.com/users";
  constructor(public http: HttpClient) {
  
  }
  getUser(){
    return this.http.get(this.ApiUrl);
  }

}
