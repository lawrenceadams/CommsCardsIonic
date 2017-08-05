import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { YoutubeVideoPlayer } from "@ionic-native/youtube-video-player";

import { YOUTUBEVIDEOS } from "../../../common/youtube.store";
import { YouTubeVideo } from "../../../common/youtube.model";
import { AnalyticsServiceProvider } from "../../../providers/analytics-service/analytics-service";


@IonicPage()
@Component({
  selector: 'page-youtube-links',
  templateUrl: 'youtube-links.html',
})
export class YoutubeLinksPage {

  public videos: YouTubeVideo[] = YOUTUBEVIDEOS;

  constructor(private analytics: AnalyticsServiceProvider, public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer) {
  }

  openLink(item) {
    this.youtube.openVideo(item.link);
    // TODO Loading Screen

    this.analytics.YouTubeView(item.id);
    // TODO Analytics DONE TESTING NEEDED.
  }

}
