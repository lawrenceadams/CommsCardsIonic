import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Scenario } from "../osce.model";
import { OSCE_SCENARIOS } from "../osce.store";

@Component({
    selector: 'page-osce-scenario-viewer',
    templateUrl: 'osce-scenario-viewer.html',
})
export class OsceScenarioViewer {

    activeButton: number;
    scenarioId: number;

    public activeScenario: Scenario;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.activeButton = 0;
        this.scenarioId = this.navParams.get('data');

        this.activeScenario = OSCE_SCENARIOS[this.scenarioId];
    }

    onButtonClick(buttonid) {
        this.activeButton = buttonid;
    }

}
