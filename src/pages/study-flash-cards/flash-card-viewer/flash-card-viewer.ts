import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from "../../../providers/data-service/data-service";
import { Card } from "../../../common/card.model";

@Component({
  selector: 'page-flash-card-viewer',
  templateUrl: 'flash-card-viewer.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('right', style({
        transform: 'translate3d(-150%, 0, 0)'
      })),
      state('left', style({
        transform: 'translate3d(150%, 0, 0)'
      })),
      transition('in => *', animate('200ms ease-in')),
      transition('* => in', animate('200ms ease-out'))
    ]),

  ]
})
export class FlashCardViewerPage {

  private activeCardIndex: number;
  private currentCards: Card[];

  public currentCard: Card;

  flyInOutState: String = 'in';

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: DataServiceProvider) {
    this.activeCardIndex = this.navParams.get('data');
    this.currentCards = this.service.getCards();

    // this.updateCurrentCard();

    // Need to do this by hand in order to avoid the setTimeout causing an undefined error.
    this.currentCard = this.currentCards[this.activeCardIndex]
  }

  onCardSwipeEvent(e) {
    if (e === "next") {
      console.log("[FlashCardViewerPage] Next card.");
      this.activeCardIndex += 1;
      this.flyInOutState = "right";
      // Check if we have run out of cards to go through
      if (this.activeCardIndex > this.currentCards.length - 1) {
        // Reset back to the beginning!
        this.activeCardIndex = 0;
      }
    } else if (e === "previous") {
      console.log("[FlashCardViewerPage] Previous card.");
      this.activeCardIndex -= 1;
      this.flyInOutState = "left";
      if (this.activeCardIndex < 0) {
        this.activeCardIndex = this.currentCards.length - 1;
        // TODO Notify user.
      }
    }
    console.log(this.activeCardIndex);
    this.updateCurrentCard();
  }

  updateCurrentCard() {
    setTimeout(() => {
      this.currentCard = this.currentCards[this.activeCardIndex]
      this.flyInOutState = "in";
    }, 200);
  }

}
