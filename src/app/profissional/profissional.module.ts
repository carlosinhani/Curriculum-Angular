import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissionalRoutingModule } from './profissional-routing.module';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { TrabalhoCadastroComponent } from './trabalho-cadastro/trabalho-cadastro.component';


@NgModule({
  declarations: [TrabalhoComponent, TrabalhoCadastroComponent],
  imports: [
    CommonModule,
    ProfissionalRoutingModule
  ]
})
export class ProfissionalModule { }
