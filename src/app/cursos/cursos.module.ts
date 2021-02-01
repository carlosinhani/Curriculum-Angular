import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.lista/cursos.component';
import { CadastroCursosComponent } from "./cadastro-cursos/CadastroCursosComponent";



@NgModule({
  declarations: [
    CursosComponent,
    CadastroCursosComponent,

  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule,
    FormsModule,


  ]
})
export class CursosModule { }
