import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { CadastroCursosComponent } from "./cadastro-cursos/CadastroCursosComponent";



@NgModule({
  declarations: [
    CursosComponent,
    CadastroCursosComponent,

  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CursosModule { }
