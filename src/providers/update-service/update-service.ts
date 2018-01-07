import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DatabaseServiceProvider } from "../database-service/database-service";
import { Observable } from 'rxjs/Observable';

import { VersionDataModel, IVersionData } from "../models/version.model";

import { ICard } from "../../common/card.model";
import { IScenario } from "../../common/osce.model";
import { IUsefulLink } from "../../common/usefulLink.model";
import { IYouTubeVideo } from "../../common/youtube.model";

/*
  Generated class for the UpdateServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UpdateServiceProvider {

  // private MANIFEST_URL = "http://commscard.abbeyhc.co.uk/manifest.json";
  private ROOT_URL = "/data/";

  constructor(public http: Http, private dbSrvc: DatabaseServiceProvider) {
  }

  /**
   * Returns Promise with interface IVersionData.
   * @returns Promise
   * TODO Replace proxy with http://commscard.abbeyhc.co.uk/manifest.json
   */
  public getManifest(): Promise<IVersionData> {
    return this.http.get(this.ROOT_URL + "/manifest.json").map(res => res.json()).toPromise();
  }

  public getRemoteCards(): Promise<ICard[]> {
    return this.http.get(this.ROOT_URL + "/cards.json").map(res => res.json()).toPromise();
  }

  public getRemoteOSCEScenarios(): Promise<IScenario[]> {
    return this.http.get(this.ROOT_URL + "/osce_scenarios.json").map(res => res.json()).toPromise();
  }

  public getRemoteUsefulLinks(): Promise<IUsefulLink[]> {
    return this.http.get(this.ROOT_URL + "/useful_links.json").map(res => res.json()).toPromise();
  }

  public getRemoteVideos(): Promise<IYouTubeVideo[]> {
    return this.http.get(this.ROOT_URL + "/videos.json").map(res => res.json()).toPromise();
  }

  public determineOutdated() {
    var localDB: IVersionData;
    var remoteDB: IVersionData;

    var getLocalDBPromise = this.dbSrvc.getLocalDBVersion().then(res => {
      localDB = res;
    }).catch(err => {
      if (err.code === 2) { // If local db is not present
        this.dbSrvc.initLocalDB().then(res => { console.log("Initialised local db. + " + res) })
        this.dbSrvc.getLocalDBVersion().then(res => { // Still need to set localDB variable
          localDB = res;
        })
      }
    });

    var getRemoteDBPromise = this.getManifest().then(res => {
      remoteDB = res;
    });

    Promise.all([getLocalDBPromise, getRemoteDBPromise]).then(() => {
      if (localDB.cards < remoteDB.cards) {
        // updateCards;
      }
    });
  }

}