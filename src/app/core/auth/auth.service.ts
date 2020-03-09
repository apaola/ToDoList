import { AngularFirestore } from 'angularfire2/firestore';
import { User } from './../models/user.class';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: any = false;

  constructor(public afAuth: AngularFireAuth, private db: AngularFirestore) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
   }

   //Login
   async onLogin(user: User) {
     try{
       return await this.afAuth.auth.signInWithEmailAndPassword(
         user.email, 
         user.password
        );
     } catch (error) {
       console.log('Error on login user', error);
     }
   }

   //Register
  onRegister(email: string, password: string, name:string) {
     return new Promise ((resolse, reject) => {
       this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
         const uid = res.user.uid;
         this.db.collection('users').doc(uid).set({
           name: name,
           uid: uid,
           email: email
         })
       })
     }) 
   }

}
