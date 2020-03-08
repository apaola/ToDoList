import { User } from './../models/user.class';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
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
   async onRegister(user: User) {
     try {
       return await this.afAuth.auth.createUserWithEmailAndPassword(
         user.email,
         user.password
       );
     } catch (error) {
       console.log('Error on register user', error);
     }
   }

}
