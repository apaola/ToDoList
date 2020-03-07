import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import Parse from 'parse';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    Parse.initialize("ef35YLirhiLV5abUnYyzDjVjMk8dd1cuLyOj0gKj", "b55QxLfPBai7DL4CQkr1Ze2bucU4hadyvCO0vurc");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false);

      Parse.initialize("ef35YLirhiLV5abUnYyzDjVjMk8dd1cuLyOj0gKj", "b55QxLfPBai7DL4CQkr1Ze2bucU4hadyvCO0vurc");
      Parse.serverURL = 'https://parseapi.back4app.com/';
    });
  }
}
