import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from "../pages/tabs/tabs";
import { UpdateServiceProvider } from "../providers/update-service/update-service";
import { DatabaseServiceProvider } from "../providers/database-service/database-service";
import { IVersionData, VersionDataModel } from "../providers/models/version.model";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  localDB: IVersionData;
  remoteDB: IVersionData;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, updateSrvc: UpdateServiceProvider, dbSrvc: DatabaseServiceProvider) {
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

      var getLocalPromise = dbSrvc.getLocalDBVersion().then(res => { //TODO Compare local with remote
        console.log("getLocalDBVersion() called.")
        console.log(res)
        this.localDB = res;
      }).catch(err => {
        if (err.code === 2) {
          console.log("Initialising local db.");
          dbSrvc.initLocalDB().then(res => { console.log("Initialised local db. + " + res) })
        }
      });

      // Next, get remote manifest.
      var getRemotePromise = updateSrvc.getManifest().then(res => {
        console.log("getManifest() returned.")
        console.log(res)
        this.remoteDB = res;
      });

      Promise.all([getLocalPromise, getRemotePromise]).then(res => {
        console.log("All async tasks complete.");
        console.log("");
        console.log("local.cards.version: " + this.localDB.cards);
        console.log("remote.cards.version: " + this.remoteDB.cards);
      })


    });
  }
}

