import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';

import { GoogleAnalytics } from "@ionic-native/google-analytics";

@Injectable()
export class AnalyticsServiceProvider {

  constructor(public ga: GoogleAnalytics) {
    this.init();
  }

  // Start up of Google Analytics Service
  init() {
    // Initialize GA Service
    this.ga.debugMode()
    this.ga.startTrackerWithId("UA-101513198-1");

    this.ga.enableUncaughtExceptionReporting(true)
      .then((_success) => {
        console.log(_success)
      }).catch((_error) => {
        console.log(_error)
      });

    this.ga.trackEvent("Develop", "Dev", undefined, 0);
    console.log("[AnalyticsServiceProvider] Started.")
  }

  flashCardView(cardID) {
    this.ga.trackEvent("FlashCards", "View", cardID, 1);
    console.log("[AnalyticsServiceProvider] FlashCard View ID:" + cardID);
  }

  OSCEScenarioView(scenarioID) {
    this.ga.trackEvent("OSCEScenario", "View", scenarioID, 1);
    console.log("[AnalyticsServiceProvider] OSCEScenario View ID:" + scenarioID);
  }

}
