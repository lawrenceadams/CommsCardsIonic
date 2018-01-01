import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsefulLink } from "../../common/usefulLink.model";
import { USEFULLINKS } from "../../common/usefulLink.store";

declare let cordova: any;

@Component({
  selector: 'page-useful-links',
  templateUrl: 'useful-links.html',
})
export class UsefulLinksPage {

  public links: UsefulLink[] = USEFULLINKS;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // Open link in native web browser 
  openExternalURL(url) {
    cordova.InAppBrowser.open(url, '_system', "location=true");
  }

  // Open YouTube link page
  youtubeLinks() {
    this.navCtrl.push('YoutubeLinksPage');
  }

}
