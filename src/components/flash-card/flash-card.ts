import { Component, Input } from '@angular/core';

@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  @Input() activeCard;

  text: string;
  public isFlipped: boolean = false;

  constructor() {

  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

}
