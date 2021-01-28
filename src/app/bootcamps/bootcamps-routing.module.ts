import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosBootcampsComponent } from './cursos-bootcamps/cursos-bootcamps.component';

const routes: Routes = [
  {
    path: '', component: CursosBootcampsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootcampsRoutingModule { }
