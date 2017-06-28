import { Component } from "@angular/core";

import { HomePage } from "../home/home";
import { StudyPage } from "../study/study";

@Component({
    selector: 'page-tabs',
    template: `
    <ion-tabs>
        <ion-tab [root]="homePg" tabTitle="Home" tabIcon="home"></ion-tab>
        <ion-tab [root]="studyPg" tabTitle="Study" tabIcon="book"></ion-tab>
    </ion-tabs>
    `
})
export class TabsPage {
    homePg = HomePage;
    studyPg = StudyPage;
}