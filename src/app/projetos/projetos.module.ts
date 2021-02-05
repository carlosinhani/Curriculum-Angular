import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { CommitProjComponent } from './commit-proj/commit-proj.component';
import { ProjectListComponent } from './project-list/project-list.component';


@NgModule({
  declarations: [CommitProjComponent, ProjectListComponent],
  imports: [
    CommonModule,
    ProjetosRoutingModule
  ]
})
export class ProjetosModule { }
