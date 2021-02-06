import { TrabalhoResolverGuard } from './guards/trabalho-resolver.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabalhoCadastroComponent } from './trabalho-cadastro/trabalho-cadastro.component';

import { TrabalhoComponent } from './trabalho/trabalho.component';

const routes: Routes = [
  { path: '', component: TrabalhoComponent },
  {
    path: 'cadastro', component: TrabalhoCadastroComponent,
    resolve: {
      emprego: TrabalhoResolverGuard
    }
  },
  {
    path: 'editar/:id',component: TrabalhoCadastroComponent,
    resolve: {
      emprego: TrabalhoResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfissionalRoutingModule { }
