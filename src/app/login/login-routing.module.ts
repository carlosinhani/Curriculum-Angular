import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../curriculum/home/home.component';



const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'curriculum', component: HomeComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
