import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCursosComponent } from './cadastro-cursos/CadastroCursosComponent';
import { CursosComponent } from './cursos.lista/cursos.component';
import { CursoResolverGuard } from './guards/curso-resolver.guard';

const routes: Routes = [
  { path: '', component: CursosComponent },
  {
    path: 'cadastro', component: CadastroCursosComponent,
    resolve: {
      curso: CursoResolverGuard
    }
  },
  {
    path: 'editar/:id', component: CadastroCursosComponent,
    resolve: {
      curso: CursoResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
