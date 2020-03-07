import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListService } from './core/services/list.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: "AIzaSyDgsi4Jly7BjxpYPL67UF-1IhV5zwnBUBQ",
    authDomain: "todolist-f4060.firebaseapp.com",
    databaseURL: "https://todolist-f4060.firebaseio.com",
    projectId: "todolist-f4060",
    storageBucket: "todolist-f4060.appspot.com",
    messagingSenderId: "445270637738",
    appId: "1:445270637738:web:3935b6c1f2959f222824d3",
    measurementId: "G-VXWQEW0H5V"

};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig,'todolist'),
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
