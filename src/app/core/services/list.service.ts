import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  apiUrl = 'https://parseapi.back4app.com/classes/ListDetails';

  constructor(public http: HttpClient) { 
    console.log('Hello RestServiceProvider Provider');
  }

  getLists() {
    return new Promise(resolve => {
      //Parse.initialize("ef35YLirhiLV5abUnYyzDjVjMk8dd1cuLyOj0gKj", "b55QxLfPBai7DL4CQkr1Ze2bucU4hadyvCO0vurc");      
      //Parse.serverURL = 'https://parseapi.back4app.com/';
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  /*getLists() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl,
        {
          //headers: new HttpHeaders().set('Authorization', 'my-token-de-autoriazación'),
          headers: new HttpHeaders({ 
            "X-Parse-Application-Id": "ef35YLirhiLV5abUnYyzDjVjMk8dd1cuLyOj0gKj", 
            "X-Parse-REST-API-Key": "b55QxLfPBai7DL4CQkr1Ze2bucU4hadyvCO0vurc", 
            })
        }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }*/

}
