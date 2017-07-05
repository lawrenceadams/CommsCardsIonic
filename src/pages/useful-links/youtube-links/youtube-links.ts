import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { YoutubeVideoPlayer } from "@ionic-native/youtube-video-player";

/**
 * Generated class for the YoutubeLinksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-youtube-links',
  templateUrl: 'youtube-links.html',
})
export class YoutubeLinksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer) {
  }

  openLink() {
    this.youtube.openVideo("rgxSFT-3KWw");
  }

}
