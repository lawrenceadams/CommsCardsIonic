import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DataServiceProvider } from "../../providers/data-service/data-service";
import { FlashCardViewerPage } from "./flash-card-viewer/flash-card-viewer";

import { Card } from "../../common/card.model";

@Component({
  selector: 'page-study-flash-cards',
  templateUrl: 'study-flash-cards.html',
})
export class StudyFlashCardsPage {
  sortCardsBy: any;

  selectedQuery: string;
  selectedSubquery: string[];

  foundCards: Card[];

  // sortByOptions defines the main query.
  sortByOptions: any = [
    { title: "Year", internal: "year" },
    { title: "System", internal: "system" },
    { title: "Type", internal: "type" }
  ];
  // Avalaible Subqueries
  yearSubOptions = [
    { title: "Year 1", internal: 1 },
    { title: "Year 2", internal: 2 },
    { title: "Year 3", internal: 3 }
  ]
  systemSubOptions = [
    { title: "Principles", internal: "princ" },
    { title: "Respiratory", internal: "resp" },
    { title: "Cardiovascular", internal: "cardio" },
    { title: "Gastroenterology", internal: "gi" },
    { title: "Dermatology", internal: "derm" },
    // { title: "Musculoskeletal", internal: "msk" }, // No cards currently
    { title: "Endocrine", internal: "endo" },
    { title: "Child and Family", internal: "paeds" },
    { title: "Ophthalmology", internal: "ophthal" },
    { title: "Ear, Nose, Throat", internal: "ent" },
    { title: "Renal", internal: "renal" },
    { title: "Urology", internal: "urol" },
    { title: "Ageing", internal: "age" },
    { title: "Neurology", internal: "neuro" },
    { title: "Psychiatry", internal: "psych" },
    { title: "Obstetrics and Gynaecology", internal: "obgyn" },
    { title: "Haematology", internal: "haem" },
    { title: "Microbiology", internal: "microbio" },
    { title: "Pharmacology", internal: "pharma" },
    { title: "Ethics and Law", internal: "ethlaw" },
    { title: "General Practice", internal: "GP" },
    { title: "Public Health", internal: "pubhealth" },
    { title: "Radiology", internal: "radiol" }
  ]
  typeSubOptions = [
    { title: "Risk", internal: "risk" },
    { title: "Health Promotion", internal: "healthpromo" },
    { title: "Types of Consultation/Skills", internal: "typesofconsul" },
    { title: "Interpreting Results", internal: "interpret" },
    { title: "Consent and Procedures", internal: "consentproc" },
    { title: "Explaining and Planning", internal: "explainplan" },
    { title: "Explaining Diseases", internal: "explaindisease" }
  ]

  // Defines the avaliable suboptions (i.e. each avaliable year)
  sortBySuboptions: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: DataServiceProvider,
    private loadingCtrl: LoadingController
  ) {

  }

  loader;

  ionViewDidLoad() {
    // Set default sort option to year
    // Other options: system, type.
    this.selectedQuery = "year";
    this.sortCardsBy = "year";

    // Loading screen for initial load
    this.showLoader();

    this.service.setQuery(this.selectedQuery, ["1", "2", "3"]);
    this.foundCards = this.service.getCards();

    this.updateSelectSuboptions(this.selectedQuery);
  }

  onSortOptionChange(selectedValue: string) {
    console.log(selectedValue + " chosen.");
    this.updateSelectSuboptions(selectedValue);
    this.selectedQuery = selectedValue;
  }

  updateSelectSuboptions(queryselector: string) {
    // Manipulate sortBySuboptions to give user options to choose what cards.
    // TODO Build a better way of selecting options...
    if (queryselector === "year") {
      this.sortBySuboptions = this.yearSubOptions;
    } else if (queryselector === "system") {
      this.sortBySuboptions = this.systemSubOptions;
    } else if (queryselector === "type") {
      this.sortBySuboptions = this.typeSubOptions;
    } else {
      console.error("Something has gone badly wrong. This should not be possible.");
    }
  }

  onSuboptionSelect(queryselector: string[]) {
    this.showLoader();
    this.selectedSubquery = queryselector;
    this.service.setQuery(this.selectedQuery, this.selectedSubquery);
    this.foundCards = this.service.getCards();
    this.hideLoader();
  }

  onItemClick(index) {
    console.log('[StudyFlashCards.html] Selected card index: ' + index);
    this.navCtrl.push(FlashCardViewerPage, { data: index });
  }

  showLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Finding cards...",
      dismissOnPageChange: true
    });
    this.loader.present();
  }

  hideLoader() {
    this.loader.dismiss();
  }

}
