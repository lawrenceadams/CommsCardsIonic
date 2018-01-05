import { Injectable } from '@angular/core';
import { NativeStorage } from "@ionic-native/native-storage";
import 'rxjs/add/operator/map';

import { VersionDataModel, IVersionData } from "../models/version.model";
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the DatabaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseServiceProvider {

  public DATABASE_INIT_SEED: VersionDataModel = {
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
    return this.nativeStorage.getItem("versions");
  }

  public initLocalDB() {
    return this.nativeStorage.setItem("versions", this.DATABASE_INIT_SEED);
  }

}
