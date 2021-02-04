import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootcampsResolverGuard } from './guards/bootcamps-resolver.guard';
import { BootcampsCadastroComponent } from './bootcamps-cadastro/bootcamps-cadastro.component';
import { CursosBootcampsComponent } from './cursos-bootcamps-list/cursos-bootcamps.component';

const routes: Routes = [
  {path: '', component: CursosBootcampsComponent},
  {
    path: 'cadastro', component: BootcampsCadastroComponent,
    resolve: {
      bootscamp: BootcampsResolverGuard
    }
  },
  {
    path: 'editar/:id', component: BootcampsCadastroComponent,
    resolve: {
      bootscamp: BootcampsResolverGuard
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootcampsRoutingModule { }
