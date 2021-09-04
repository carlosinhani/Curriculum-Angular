import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path:'login',
    loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./curriculum/curriculum.module').then(m => m.CurriculumModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
  },
  {
    path: 'bootcamps',
    loadChildren: () => import('./bootcamps/bootcamps.module').then(m => m.BootcampsModule)
  },
  {
    path: 'projetos',
    loadChildren: () => import('./projetos/projetos.module').then(m => m.ProjetosModule)
  },
  {
    path: 'ex-prof',
    loadChildren: () => import('./profissional/profissional.module').then(m => m.ProfissionalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
