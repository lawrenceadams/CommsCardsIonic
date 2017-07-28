import { Injectable } from '@angular/core';

import { GoogleAnalytics } from "@ionic-native/google-analytics";

/**
 * Anayltics service for tracking App Events
 */

@Injectable()
export class AnalyticsServiceProvider {

  constructor(public ga: GoogleAnalytics) {
    this.init();
  }

  // Start up of Google Analytics Service
  init() {
    // Initialize GA Service
    this.ga.debugMode()
    this.ga.startTrackerWithId("UA-101513198-1"); // GA TRACKER ID

    this.ga.enableUncaughtExceptionReporting(true)
      .then((_success) => {
        console.log(_success)
      }).catch((_error) => {
        console.log(_error)
      });

    console.log("[AnalyticsServiceProvider] Started.")
  }

  /**
   * Log FlashCard View Event
   * @param cardID
   */
  flashCardView(cardID) {
    this.ga.trackEvent("FlashCards", "View", cardID, 1);
    console.log("[AnalyticsServiceProvider] FlashCard View ID:" + cardID);
  }

  /**
   * Log OSCEScenario View Event
   * @param scenarioID
   */
  OSCEScenarioView(scenarioID) {
    this.ga.trackEvent("OSCEScenario", "View", scenarioID, 1);
    console.log("[AnalyticsServiceProvider] OSCEScenario View ID:" + scenarioID);
  }

  /**
   * Log YouTube Video View Event
   * @param videoID 
   */
  YouTubeView(videoID) {
    this.ga.trackEvent("YouTube", "View", videoID, 1);
    console.log("[AnalyticsServiceProvider] YouTube View ID:" + videoID);
  }

}