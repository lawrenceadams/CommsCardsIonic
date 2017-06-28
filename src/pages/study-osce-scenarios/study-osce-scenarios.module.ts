import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyOsceScenariosPage } from './study-osce-scenarios';

@NgModule({
  declarations: [
    StudyOsceScenariosPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyOsceScenariosPage),
  ],
  exports: [
    StudyOsceScenariosPage
  ]
})
export class StudyOsceScenariosPageModule {}
