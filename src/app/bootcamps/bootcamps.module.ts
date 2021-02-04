import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BootcampsRoutingModule } from './bootcamps-routing.module';
import { CursosBootcampsComponent } from './cursos-bootcamps-list/cursos-bootcamps.component';
import { BootcampsCadastroComponent } from './bootcamps-cadastro/bootcamps-cadastro.component';

import { MsgModule } from '../shared/msg/msg.module';


@NgModule({
  declarations: [
    CursosBootcampsComponent,
    BootcampsCadastroComponent
  ],
  imports: [
    CommonModule,
    BootcampsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MsgModule
  ]
})
export class BootcampsModule { }
