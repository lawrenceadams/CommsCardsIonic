import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from "../../../providers/data-service/data-service";
import { Card } from "../../../common/card.model";

@Component({
  selector: 'page-flash-card-viewer',
  templateUrl: 'flash-card-viewer.html',
})
export class FlashCardViewerPage {

  private activeCardIndex: number;
  private currentCards: Card[];

  public currentCard: Card;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: DataServiceProvider) {
    this.activeCardIndex = this.navParams.get('data');
    this.currentCards = this.service.getCards();

    this.updateCurrentCard();
  }

  onCardSwipeEvent(e) {
    if (e === "next") {
      console.log("[FlashCardViewerPage] Next card.");
      this.activeCardIndex += 1;
      // Check if we have run out of cards to go through
      if (this.activeCardIndex > this.currentCards.length - 1) {
        // Reset back to the beginning!
        this.activeCardIndex = 0;
      }
    } else if (e === "previous") {
      console.log("[FlashCardViewerPage] Previous card.");
      this.activeCardIndex -= 1;
      if (this.activeCardIndex < 0) {
        this.activeCardIndex = this.currentCards.length - 1;
        // TODO Notify user.
      }
    }
    console.log(this.activeCardIndex);
    this.updateCurrentCard();
  }

  updateCurrentCard() {
    this.currentCard = this.currentCards[this.activeCardIndex]
  }

}
