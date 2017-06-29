import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ToastController } from "ionic-angular";

import { SafeHTMLPipe } from "../../common/htmlSanitizer.pipe";

@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  @Input() activeCard;
  @Output() cardSwipeEvent: EventEmitter<String> = new EventEmitter();

  text: string;
  public isFlipped: boolean = false;

  constructor(public toastCtrl: ToastController) {

  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  swiped(e) {
    // Get direction of swipe from $event (e)
    if (e.direction === 2) {
      this.cardSwipeEvent.emit("next");
    } else if (e.direction === 4) {
      this.cardSwipeEvent.emit("previous");
    }
  }

}
