import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroCursosComponent } from './cadastro-cursos/CadastroCursosComponent';

import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  { path: '', component: CursosComponent},
  { path: 'cadastro', component: CadastroCursosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
