import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyCommsCardsPage } from './study-comms-cards';

@NgModule({
  declarations: [
    StudyCommsCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyCommsCardsPage),
  ],
  exports: [
    StudyCommsCardsPage
  ]
})
export class StudyCommsCardsPageModule {}
