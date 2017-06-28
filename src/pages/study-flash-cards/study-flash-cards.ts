import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-study-flash-cards',
  templateUrl: 'study-flash-cards.html',
})
export class StudyFlashCardsPage {

  sortCardsBy: string;
  selectedSuboption: string;

  sortByOptions: string[] = ["Year", "System", "Type"];
  sortBySuboptions: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // Set default sort option to year
    // Other options: system, type.
    this.sortCardsBy = "Year";
    console.log('ionViewDidLoad StudyFlashCardsPage');
    this.updateSelectSuboptions(this.sortCardsBy);
  }

  onSortOptionChange(selectedValue: string) {
    console.log(selectedValue + " chosen.");
    this.updateSelectSuboptions(selectedValue);
  }

  updateSelectSuboptions(queryselector: string) {
    // Manipulate sortBySuboptions to give user options to choose what cards.
    // TODO Build a better way of selecting options...
    if (queryselector === "Year") {
      this.sortBySuboptions = ["Year 1", "Year 2", "Year 3"];
    } else if (queryselector === "System") {
      this.sortBySuboptions = ["Principles", "Respiratory", "etc..."];
    } else if (queryselector === "Type") {
      this.sortBySuboptions = ["Breaking Badnews", "Blah", "Blah"];
    } else {
      console.error("Something has gone badly wrong. This should not be possible.");
    }
  }

  onSuboptionSelect(queryselector: string) {
    console.log(queryselector + " selected.");
  }


}
