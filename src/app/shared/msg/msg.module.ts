import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';



@NgModule({
  declarations: [
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CampoControlErroComponent
  ]
})
export class MsgModule { }
