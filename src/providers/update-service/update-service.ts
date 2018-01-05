import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DatabaseServiceProvider } from "../database-service/database-service";
import { VersionDataModel, IVersionData } from "../models/version.model";
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UpdateServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UpdateServiceProvider {

  private MANIFEST_URL = "http://commscard.abbeyhc.co.uk/manifest.json";

  constructor(public http: Http, private dbService: DatabaseServiceProvider) {
  }

  /**
   * Returns Promise with interface IVersionData.
   * @returns Promise
   * TODO Replace proxy with http://commscard.abbeyhc.co.uk/manifest.json
   */
  public getManifest(): Promise<IVersionData> {
    return this.http.get("/data/manifest.json").map(res => res.json()).toPromise();
  }

}
