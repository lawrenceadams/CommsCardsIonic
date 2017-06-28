import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from "../about/about";
import { UsefulLinksPage } from "../useful-links/useful-links";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPg = AboutPage;
  usefulLinksPg = UsefulLinksPage;


  constructor(public navCtrl: NavController) {

  }

}
