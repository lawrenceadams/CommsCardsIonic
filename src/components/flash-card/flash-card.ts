import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ToastController } from "ionic-angular";

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
    var message: string;
    // console.warn("[Gesture] Swiped!!");

    // Get direction of swipe from $event (e)
    if (e.direction === 2) { message = "Next card"; this.cardSwipeEvent.emit("next"); }
    else if (e.direction === 4) { message = "Previous card"; this.cardSwipeEvent.emit("previous"); }
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
