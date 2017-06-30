import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from "../about/about";
import { UsefulLinksPage } from "../useful-links/useful-links";
import { LegalPage } from "../legal/legal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  legalPg = LegalPage
  aboutPg = AboutPage;
  usefulLinksPg = UsefulLinksPage;


  constructor(public navCtrl: NavController) {

  }

  // Selects the study tab.
  startStudying() {
    this.navCtrl.parent.select(1)
  }

}
