import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UpdateServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UpdateServiceProvider {

  manifestData;

  private MANIFEST_URL = "http://commscard.abbeyhc.co.uk/manifest.json";

  constructor(public http: Http) {
    console.log('Hello UpdateServiceProvider Provider');
  }

  fetchManifest() {
    // this.http.get("http://commscard.abbeyhc.co.uk/manifest.json").map(res => res.json()).subscribe(data => {
    this.http.get("/data/manifest.json").map(res => res.json()).subscribe(data => {
      console.log(data);
      this.manifestData = data;
    });
    // console.log(this.manifestData);
  }

}
