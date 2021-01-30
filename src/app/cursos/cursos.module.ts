import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { CadastroCursosComponent } from './cadastro-cursos/cadastro-cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
    CadastroCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
