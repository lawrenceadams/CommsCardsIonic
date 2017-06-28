import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyFlashCardsPage } from './study-flash-cards';

@NgModule({
  declarations: [
    StudyFlashCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyFlashCardsPage),
  ],
  exports: [
    StudyFlashCardsPage
  ]
})
export class StudyFlashCardsPageModule {}
