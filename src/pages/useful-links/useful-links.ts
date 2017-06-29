import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare let cordova: any;

@Component({
  selector: 'page-useful-links',
  templateUrl: 'useful-links.html',
})
export class UsefulLinksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openExternalURL(url) {
    cordova.InAppBrowser.open(url, '_system', "location=true");
  }

}
