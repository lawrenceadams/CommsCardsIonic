import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubeLinksPage } from './youtube-links';

@NgModule({
  declarations: [
    YoutubeLinksPage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubeLinksPage),
  ],
  exports: [
    YoutubeLinksPage
  ]
})
export class YoutubeLinksPageModule {}
