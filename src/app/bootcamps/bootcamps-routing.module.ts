import { BootcampsCadastroComponent } from './bootcamps-cadastro/bootcamps-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosBootcampsComponent } from './cursos-bootcamps-list/cursos-bootcamps.component';

const routes: Routes = [
  {
    path: '', component: CursosBootcampsComponent
  },
  {
    path: 'cadastro', component: BootcampsCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootcampsRoutingModule { }
