import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-study-flash-cards',
  templateUrl: 'study-flash-cards.html',
})
export class StudyFlashCardsPage {

  sortCardsBy: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // Set default sort option to year
    // Other options: system, type.
    this.sortCardsBy = "Year";
    console.log('ionViewDidLoad StudyFlashCardsPage');
  }


}
