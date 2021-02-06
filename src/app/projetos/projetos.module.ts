import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProjetosRoutingModule } from './projetos-routing.module';
import { CommitProjComponent } from './commit-proj/commit-proj.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { MsgModule } from '../shared/msg/msg.module';


@NgModule({
  declarations: [
    CommitProjComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjetosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MsgModule
  ]
})
export class ProjetosModule { }
