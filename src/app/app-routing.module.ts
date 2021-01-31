import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroCursosComponent } from "./cursos/cadastro-cursos/CadastroCursosComponent";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'cadastro'
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./curriculum/curriculum.module').then(m => m.CurriculumModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
  },
  // {
  //   path: 'cursos',
  //   children: [
  //     {
  //       path: 'cadastro', component: CadastroCursosComponent
  //     }
  //   ]
  // },
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
