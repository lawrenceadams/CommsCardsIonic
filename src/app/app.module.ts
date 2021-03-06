import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SplashScreen } from '@ionic-native/splash-screen';
import { YoutubeVideoPlayer } from "@ionic-native/youtube-video-player";
import { StatusBar } from '@ionic-native/status-bar';
import { GoogleAnalytics } from "@ionic-native/google-analytics";

import { MyApp } from './app.component';
import { TabsPage } from "../pages/tabs/tabs";
import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";
import { UsefulLinksPage } from "../pages/useful-links/useful-links";
import { StudyPage } from "../pages/study/study";
import { StudyFlashCardsPage } from "../pages/study-flash-cards/study-flash-cards";
import { FlashCardViewerPage } from "../pages/study-flash-cards/flash-card-viewer/flash-card-viewer";
import { StudyOsceScenariosPage } from "../pages/study-osce-scenarios/study-osce-scenarios";
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { SafeHTMLPipe } from "../common/htmlSanitizer.pipe";
import { LegalPage } from "../pages/legal/legal";
import { OsceScenarioViewer } from "../pages/study-osce-scenarios/osce-scenario-viewer/osce-scenario-viewer";

import { DataServiceProvider } from '../providers/data-service/data-service';
import { TabsService } from "../providers/tabs.service";
import { AnalyticsServiceProvider } from '../providers/analytics-service/analytics-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    UsefulLinksPage,
    TabsPage,
    StudyPage,
    StudyFlashCardsPage,
    StudyOsceScenariosPage,
    FlashCardViewerPage,
    FlashCardComponent,
    SafeHTMLPipe,
    LegalPage,
    OsceScenarioViewer
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          statusbarPadding: true
        }
      }
    }),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    UsefulLinksPage,
    TabsPage,
    StudyPage,
    StudyFlashCardsPage,
    StudyOsceScenariosPage,
    FlashCardViewerPage,
    LegalPage,
    OsceScenarioViewer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataServiceProvider,
    TabsService,
    YoutubeVideoPlayer,
    GoogleAnalytics,
    AnalyticsServiceProvider
  ]
})
export class AppModule { }
