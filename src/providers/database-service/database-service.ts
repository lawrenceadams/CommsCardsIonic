import { Injectable } from '@angular/core';
import { NativeStorage } from "@ionic-native/native-storage";
import 'rxjs/add/operator/map';

import { VersionDataModel, IVersionData } from "../models/version.model";

import { ICard } from "../../common/card.model";
import { IScenario } from "../../common/osce.model";
import { IUsefulLink } from "../../common/usefulLink.model";
import { IYouTubeVideo } from "../../common/youtube.model";

import { FLASHCARDS } from "../../common/card.store";
// import { OSCE_SCENARIOS } from "../../common/osce.store";
// import { USEFULLINKS } from "../../common/usefulLink.store";
// import { YOUTUBEVIDEOS } from "../../common/youtube.store";

/*
  Generated class for the DatabaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseServiceProvider {

  private DATABASE_INIT_SEED: VersionDataModel = {
    cards: 0,
    osce_scenarios: 0,
    useful_links: 0,
    videos: 0
  }

  constructor(private nativeStorage: NativeStorage) {
  }

  /**
   * Gets the version of the local databases from native local storage.
   */
  public getLocalDBVersion(): Promise<IVersionData> {
    // return this.nativeStorage.getItem("versions");

    return new Promise<IVersionData>((resolve, reject) => {
      this.nativeStorage.getItem("versions").then(res => {
        resolve(res);
      }).catch(err => {
        if (err.code === 2) {
          this.initLocalDB();
          console.warn("No local database. Creating...")
          this.nativeStorage.getItem("versions").then(res => {
            resolve(res);
          });
        } else {
          reject(err);
        }
      })
    })
  }

  private initLocalDB() {
    this.setLocalCards(FLASHCARDS);
    return this.nativeStorage.setItem("versions", this.DATABASE_INIT_SEED);
  }

  public setLocalCards(cardObjectArray: ICard[]) {
    return this.nativeStorage.setItem("cards", cardObjectArray);
  }

  public setLocalDBVersion(input: VersionDataModel): Promise<any> {
    return this.nativeStorage.setItem("versions", input);
  }

  public getLocalCards(): Promise<ICard[]> {
    return this.nativeStorage.getItem("cards");
  }

}
