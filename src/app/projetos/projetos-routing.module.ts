import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitProjComponent } from './commit-proj/commit-proj.component';

const routes: Routes = [
  {
    path: '', component: CommitProjComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
