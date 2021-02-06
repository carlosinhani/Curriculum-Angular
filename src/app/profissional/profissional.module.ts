import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProfissionalRoutingModule } from './profissional-routing.module';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { TrabalhoCadastroComponent } from './trabalho-cadastro/trabalho-cadastro.component';

import { MsgModule } from '../shared/msg/msg.module';


@NgModule({
  declarations: [
    TrabalhoComponent,
    TrabalhoCadastroComponent
  ],
  imports: [
    CommonModule,
    ProfissionalRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MsgModule
  ]
})
export class ProfissionalModule { }
