import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Card } from "../../common/card.model";
import { FLASHCARDS } from "../../common/card.store";

@Injectable()
export class DataServiceProvider {
  constructor() {
  }

  cards: Card[] = [];
  query: string;
  subquery: string[];

  setQuery(searchQuery, searchSubquery) {
    this.query = searchQuery;
    this.subquery = searchSubquery;

    this.setCards(); // Set the cards to study
  }

  private setCards() {
    // Reset the cards which will be viewed.
    this.cards = [];
    console.log("Searching " + this.query + " for " + this.subquery);

    // Match search query.
    if (this.query === "type") {
      FLASHCARDS.filter(searchCard => {
        // If subquery is not empty
        if (this.subquery.length > 0) {
          // The search query can be multiple variables, so we have to forEach() them
          this.subquery.forEach(element => {
            // If the card includes the forEach subquery
            if (searchCard.type.includes(element)) {
              // Push to service cards.
              this.cards.push(searchCard);
            }
          });
        }
      });
    } else if (this.query === "system") {
      FLASHCARDS.filter(searchCard => {
        if (this.subquery.length > 0) {
          this.subquery.forEach(element => {
            searchCard.system.forEach(sys => {
              if (sys === element) {
                this.cards.push(searchCard);
              }
            })
          })
        }
      })
    } else if (this.query === "year") {
      FLASHCARDS.filter(searchCard => {
        if (this.subquery.length > 0) {
          this.subquery.forEach(element => {
            // Same as above but includes year
            if (searchCard.year === Number(element)) {
              // Push to service cards.
              this.cards.push(searchCard);
            }
          });
        }
      });
    } else {
      console.error("Route was likely set to an unknown search type")
    }
  }

  /**
   * @returns { Card[] }
   */
  public getCards(): Card[] {
    return this.cards;
  }

}
