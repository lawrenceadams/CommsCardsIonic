import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StudyFlashCardsPage } from "../study-flash-cards/study-flash-cards";
import { StudyOsceScenariosPage } from "../study-osce-scenarios/study-osce-scenarios";

@Component({
  selector: 'page-study',
  templateUrl: 'study.html',
})
export class StudyPage {

  studyFlashCardsPg = StudyFlashCardsPage;
  studyOSCEScenariosPg = StudyOsceScenariosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
