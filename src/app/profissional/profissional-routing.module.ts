import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabalhoComponent } from './trabalho/trabalho.component';

const routes: Routes = [
  {
    path: '', component: TrabalhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfissionalRoutingModule { }
