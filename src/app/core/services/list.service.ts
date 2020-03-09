import { List } from '../models/list.interface';
import { Injectable } from '@angular/core';

import * as Parse from 'parse';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private listCollection: AngularFirestoreCollection<List>;
  private list: Observable<List[]>;
  //apiUrl = 'https://parseapi.back4app.com/classes/ListDetails';


  constructor(private db:AngularFirestore) { 
    this.listCollection = db.collection<List>('lists');
    this.list = this.listCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }


  getListsUsers(uid: string) {
    var res = this.db.collection('users').doc(uid).collection('lists').snapshotChanges();
    return res;
  }

  getLists() {
    return this.list;
  }

  getList(id:string) {
    return this.listCollection.doc<List>(id).valueChanges();
  }

  updateList(list:List, id:string){
    return this.listCollection.doc(id).update(list);
  }

  addToList(list:List){
    return this.listCollection.add(list);
  }

  removeList(id:string){
    return this.listCollection.doc(id).delete();
  }

  /*getLists() {
    return new Promise(resolve => {
      //Parse.initialize("ef35YLirhiLV5abUnYyzDjVjMk8dd1cuLyOj0gKj", "b55QxLfPBai7DL4CQkr1Ze2bucU4hadyvCO0vurc");      
      //Parse.serverURL = 'https://parseapi.back4app.com/';
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }*/

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
