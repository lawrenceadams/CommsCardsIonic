import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { DatabaseServiceProvider } from "../database-service/database-service";
import { RemoteServiceProvider } from "../remote-service/remote-service";

import { VersionDataModel } from "../models/version.model";

/*
  Generated class for the UpdateServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UpdateServiceProvider {

  localDB: VersionDataModel;
  remoteDB: VersionDataModel;

  constructor(private dbSrvc: DatabaseServiceProvider, private remoteSrvc: RemoteServiceProvider) { }

  public initialiseUpdaterService() {
    Promise.all([
      this.dbSrvc.getLocalDBVersion().then(res => { this.localDB = res }),
      this.remoteSrvc.getRemoteManifest().then(res => { this.remoteDB = res })
    ]).then(() => {
      this.determineOutdated();
    }).catch(err => {
      if (err.status === 500) {
        console.warn("CommsCard update server was reached, but threw an error. " + err);
        return;
      } else {
        console.warn("Update Service Failed, possibly an internet connection problem");
        return;
      }
    });
  }

  private determineOutdated() {
    console.log(this.localDB);
    console.log(this.remoteDB);

    if (this.localDB.cards < this.remoteDB.cards) {
      console.warn("Oudated Cards! Local: " + this.localDB.cards + ", Remote: " + this.remoteDB.cards);
      console.warn("Fetching cards");
      this.remoteSrvc.getRemoteCards().then(res => {
        this.dbSrvc.setLocalCards(res);
      }).catch(err => {
        console.error("An error occured whilst getting card update file. " + err);
        return;
      }).then(() => {
        this.localDB.cards = this.remoteDB.cards;
        this.dbSrvc.setLocalDBVersion(this.localDB);
      });
    }

    if (this.localDB.osce_scenarios < this.remoteDB.osce_scenarios) {
      console.warn("Oudated OSCE Scenarios! Local: " + this.localDB.osce_scenarios + ", Remote: " + this.remoteDB.osce_scenarios);
    }

    if (this.localDB.useful_links < this.remoteDB.useful_links) {
      console.warn("Oudated Useful Links! Local: " + this.localDB.useful_links + ", Remote: " + this.remoteDB.useful_links);
    }

    if (this.localDB.videos < this.remoteDB.videos) {
      console.warn("Oudated Videos! Local: " + this.localDB.videos + ", Remote: " + this.remoteDB.videos);
    }

  }
}
