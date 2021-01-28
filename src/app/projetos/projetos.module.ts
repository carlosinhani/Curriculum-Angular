import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { CommitProjComponent } from './commit-proj/commit-proj.component';


@NgModule({
  declarations: [CommitProjComponent],
  imports: [
    CommonModule,
    ProjetosRoutingModule
  ]
})
export class ProjetosModule { }
