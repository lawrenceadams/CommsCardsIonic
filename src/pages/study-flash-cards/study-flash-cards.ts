import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StudyBySystemPage } from "./study-by-system/study-by-system";
import { StudyByTypePage } from "./study-by-type/study-by-type";
import { StudyByYearPage } from "./study-by-year/study-by-year";

@IonicPage()
@Component({
  selector: 'page-study-flash-cards',
  templateUrl: 'study-flash-cards.html',
})
export class StudyFlashCardsPage {

  studyBySystemPg = StudyBySystemPage;
  studyByTypePg = StudyByTypePage;
  studyByYearPg = StudyByYearPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyFlashCardsPage');
  }

}
