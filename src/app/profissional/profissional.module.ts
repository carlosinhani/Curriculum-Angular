import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissionalRoutingModule } from './profissional-routing.module';
import { TrabalhoComponent } from './trabalho/trabalho.component';


@NgModule({
  declarations: [TrabalhoComponent],
  imports: [
    CommonModule,
    ProfissionalRoutingModule
  ]
})
export class ProfissionalModule { }
