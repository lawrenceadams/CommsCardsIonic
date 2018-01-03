import { Injectable } from '@angular/core';
import { NativeStorage } from "@ionic-native/native-storage";
import 'rxjs/add/operator/map';

/*
  Generated class for the DatabaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseServiceProvider {

  private DB_INIT_SEED = {
    "cards": {
      "version": 0
    },
    "osce_scenarios": {
      "version": 0
    },
    "useful_links": {
      "version": 0
    },
    "videos": {
      "version": 0
    }
  }

  constructor(private nativeStorage: NativeStorage) {
  }

  public getLocalDataVersion() {
    this.nativeStorage.getItem("versions")
      .then(
      data => { console.log(data) },
      error => {
        if (error.code === 2) {
          console.log("NativeStorage: ITEM_NOT_FOUND");
          this.seedLocalDataVersion();
        }
      }
      );
  }

  private seedLocalDataVersion() {
    console.log("Seeding Database with v0 for all items");
    this.nativeStorage.setItem("versions", this.DB_INIT_SEED);
  }

}
