import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    CampoControlErroComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CampoControlErroComponent
  ]
})
export class MsgModule { }
