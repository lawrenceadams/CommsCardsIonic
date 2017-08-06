import { Component, Input, EventEmitter, Output } from '@angular/core';

// import { SafeHTMLPipe } from "../../common/htmlSanitizer.pipe";

@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  @Input() activeCard;
  @Output() cardSwipeEvent: EventEmitter<String> = new EventEmitter();

  text: string;
  public isFlipped: boolean = false;
  public isNotAnimating = false;

  constructor() {
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

    this.isNotAnimating = true;
    setTimeout(() => {
      this.isFlipped = false;
    }, 200);
    setTimeout(() => {
      this.isNotAnimating = false;
    }, 400);
  }

}
