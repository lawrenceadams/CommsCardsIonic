import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DatabaseServiceProvider } from "../database-service/database-service";
import { Observable } from 'rxjs/Observable';

import { IVersionData } from "../models/version.model";

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
export class RemoteServiceProvider {

  // private ROOT_URL = "/data/";
  private ROOT_URL = "http://commscard.abbeyhc.co.uk";

  constructor(public http: Http) {
  }

  /**
   * Returns Promise with interface IVersionData.
   * @returns Promise
   * TODO Replace proxy with http://commscard.abbeyhc.co.uk/manifest.json
   */
  public getRemoteManifest(): Promise<IVersionData> {
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

}