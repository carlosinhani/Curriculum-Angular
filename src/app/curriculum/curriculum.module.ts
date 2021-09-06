import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule
  ]
})
export class CurriculumModule { }
