import { ProjectResolverGuard } from './guards/project-resolver.guard';
import { ProjectListComponent } from './project-list/project-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitProjComponent } from './commit-proj/commit-proj.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent },
  {
    path: 'cadastro', component: CommitProjComponent,
    resolve: {
      proj: ProjectResolverGuard
    }
  },
  {
    path: 'editar/:id', component: CommitProjComponent,
    resolve: {
      proj: ProjectResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
