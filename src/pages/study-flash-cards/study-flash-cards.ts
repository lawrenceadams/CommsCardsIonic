import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-study-flash-cards',
  templateUrl: 'study-flash-cards.html',
})
export class StudyFlashCardsPage {

  selectedQuery: string;
  selectedSubquery: string[];

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // Set default sort option to year
    // Other options: system, type.
    this.selectedQuery = "year";
    console.log('ionViewDidLoad StudyFlashCardsPage');
    this.updateSelectSuboptions(this.selectedQuery);
  }

  onSortOptionChange(selectedValue: string) {
    console.log(selectedValue + " chosen.");
    this.updateSelectSuboptions(selectedValue);
  }

  updateSelectSuboptions(queryselector: string) {
    // Manipulate sortBySuboptions to give user options to choose what cards.
    // TODO Build a better way of selecting options...
    console.log(queryselector);
    if (queryselector === "year") {
      this.sortBySuboptions = this.yearSubOptions;
    } else if (queryselector === "system") {
      this.sortBySuboptions = this.systemSubOptions;
    } else if (queryselector === "type") {
      // this.sortBySuboptions = ["Breaking Badnews", "Blah", "Blah"];
    } else {
      console.error("Something has gone badly wrong. This should not be possible.");
    }
  }

  onSuboptionSelect(queryselector: string[]) {
    console.log(queryselector + " selected.");
    this.selectedSubquery = queryselector;
  }


}
