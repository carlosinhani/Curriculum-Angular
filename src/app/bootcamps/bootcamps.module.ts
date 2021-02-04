import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootcampsRoutingModule } from './bootcamps-routing.module';
import { CursosBootcampsComponent } from './cursos-bootcamps-list/cursos-bootcamps.component';
import { BootcampsCadastroComponent } from './bootcamps-cadastro/bootcamps-cadastro.component';


@NgModule({
  declarations: [
    CursosBootcampsComponent,
    BootcampsCadastroComponent
  ],
  imports: [
    CommonModule,
    BootcampsRoutingModule
  ]
})
export class BootcampsModule { }
