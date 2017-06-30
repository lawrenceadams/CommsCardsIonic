import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstructionModalPage } from './instruction-modal';

@NgModule({
  declarations: [
    InstructionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructionModalPage),
  ],
  exports: [
    InstructionModalPage
  ]
})
export class InstructionModalPageModule {}
