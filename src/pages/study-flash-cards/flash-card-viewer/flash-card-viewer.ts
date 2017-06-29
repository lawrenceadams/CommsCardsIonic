import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from "../../../providers/data-service/data-service";
import { Card } from "../../../common/card.model";

@Component({
  selector: 'page-flash-card-viewer',
  templateUrl: 'flash-card-viewer.html',
})
export class FlashCardViewerPage {

  data: any;
  public currentCard: Card;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: DataServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashCardViewerPage');
    this.data = this.navParams.get('data');
    this.currentCard = this.service.getCards()[this.data];
    console.log("[FlashCardViewer]: " + this.currentCard.id);
  }



}
