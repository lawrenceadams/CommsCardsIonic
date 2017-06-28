import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from "../pages/tabs/tabs";
import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";
import { UsefulLinksPage } from "../pages/useful-links/useful-links";
import { StudyPage } from "../pages/study/study";
import { StudyFlashCardsPage } from "../pages/study-flash-cards/study-flash-cards";
import { StudyOsceScenariosPage } from "../pages/study-osce-scenarios/study-osce-scenarios";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    UsefulLinksPage,
    TabsPage,
    StudyPage,
    StudyFlashCardsPage,
    StudyOsceScenariosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    StudyOsceScenariosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
