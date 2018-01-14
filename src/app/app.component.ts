import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from "../pages/tabs/tabs";
import { IVersionData } from "../providers/models/version.model";

import { UpdateServiceProvider } from "../providers/update-service/update-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  localDB: IVersionData;
  remoteDB: IVersionData;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, updateSrvc: UpdateServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      if (platform.is('android')) {
        statusBar.backgroundColorByHexString('#1c3cb0');
      }

      splashScreen.hide();


      // Temporary trigger. Need to figure out way to setup storage properly.
      // First of all get local database
      // If non-existsent then initialise with empty seed.

      updateSrvc.initialiseUpdaterService();

    });
  }
}

