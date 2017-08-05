import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { Scenario } from "../../common/osce.model";
import { OSCE_SCENARIOS } from "../../common/osce.store";
import { OsceScenarioViewer } from "./osce-scenario-viewer/osce-scenario-viewer";

@Component({
  selector: 'page-study-osce-scenarios',
  templateUrl: 'study-osce-scenarios.html',
})
export class StudyOsceScenariosPage {

  scenarios = {
    "year1": null as Scenario[],
    "year2": null as Scenario[],
    "year3": null as Scenario[],
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    this.scenarios.year1 = OSCE_SCENARIOS.filter(scen => scen.year === 1);
    this.scenarios.year2 = OSCE_SCENARIOS.filter(scen => scen.year === 2);
    this.scenarios.year3 = OSCE_SCENARIOS.filter(scen => scen.year === 3);
  }

  onItemClick(itemIndex) {
    this.navCtrl.push(OsceScenarioViewer, { data: itemIndex });
  }

}
