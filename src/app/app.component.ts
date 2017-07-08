import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from "@ionic-native/google-analytics";

import { TabsPage } from "../pages/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(public ga: GoogleAnalytics, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      if (platform.is('android')) {
        statusBar.backgroundColorByHexString('#1c3cb0');
      }

      splashScreen.hide();

      // Start Google Analytics
      ga.startTrackerWithId('UA-101513198-1')
        .then(() => {
          console.log('Google analytics is ready now');
          //the component is ready and you can call any method here
          ga.debugMode();
          ga.setAllowIDFACollection(true);
        })
        .catch(e => console.log('Error starting GoogleAnalytics', e));
    });
  }
}

