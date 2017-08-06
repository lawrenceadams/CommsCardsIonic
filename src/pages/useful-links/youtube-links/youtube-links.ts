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

  searchTerm: string = ''; // <-- Search bar sets this
  searchControl: FormControl; // Used for debounce time
  items: any; // Returned from search query, outputted in youtube-links.html
  searching: any = false; // Used to enable/disable the spinner

  public videos: YouTubeVideo[] = YOUTUBEVIDEOS;

  constructor(private analytics: AnalyticsServiceProvider, public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.setFilteredItems(); // On load page get all items

    /**
     * Setup an event listener via RxJs to wait 500ms before searching
     */
    this.searchControl.valueChanges.debounceTime(500).subscribe(search => {
      this.searching = false; // Disable spinner
      this.setFilteredItems(); // Search
    });
  }

  setFilteredItems() {
    this.items = this.filterItems(this.searchTerm); // Set items object from search query
  }

  onSearchInput() {
    this.searching = true; // Enable spinner
  }

  openLink(item) {
    this.youtube.openVideo(item.link);
    // TODO Loading Screen

    this.analytics.YouTubeView(item.id);
    // TODO Analytics DONE TESTING NEEDED.
  }

  /**
   * Private function that returns found videos
   * @param searchTerm 
   * @returns Array of YouTubeVideo Objects
   */
  private filterItems(searchTerm): YouTubeVideo[] {
    return this.videos.filter((video) => { // Returns true items only
      return video.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1; // Sets true to items which are found
    });
  }

}
