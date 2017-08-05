import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';

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

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  public videos: YouTubeVideo[] = YOUTUBEVIDEOS;

  constructor(private analytics: AnalyticsServiceProvider, public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
  }

  setFilteredItems() {
    this.items = this.filterItems(this.searchTerm);
  }

  onSearchInput() {
    this.searching = true;
  }

  openLink(item) {
    this.youtube.openVideo(item.link);
    // TODO Loading Screen

    this.analytics.YouTubeView(item.id);
    // TODO Analytics DONE TESTING NEEDED.
  }


  // FILTER FUNCTION
  private filterItems(searchTerm) {
    return this.videos.filter((video) => {
      return video.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
