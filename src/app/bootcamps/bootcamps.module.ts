import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootcampsRoutingModule } from './bootcamps-routing.module';
import { CursosBootcampsComponent } from './cursos-bootcamps/cursos-bootcamps.component';


@NgModule({
  declarations: [CursosBootcampsComponent],
  imports: [
    CommonModule,
    BootcampsRoutingModule
  ]
})
export class BootcampsModule { }
