import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MsgService } from 'src/app/shared/msg/msg.service';
import { TrabalhoService } from './../../service/trabalho.service';

@Component({
  selector: 'app-trabalho-cadastro',
  templateUrl: './trabalho-cadastro.component.html',
  styleUrls: ['./trabalho-cadastro.component.css']
})
export class TrabalhoCadastroComponent implements OnInit {

  cadastro: FormGroup;
  submitted = false;


  constructor(
    private fb: FormBuilder,
    private trabalho: TrabalhoService,
    private route: ActivatedRoute,
    private modal: MsgService,
    private location: Location

  ) { }

  ngOnInit() {

    const emprego = this.route.snapshot.data['emprego'];

    this.cadastro = this.fb.group({
      id: [emprego.id],
      nomeEmp: [emprego.nomeEmp, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      cit: [emprego.cit, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      est: [emprego.est, [Validators.required]],
      tel: [emprego.tel, [Validators.required]],
      cargo: [emprego.cargo, [Validators.minLength(5)]],
      tEmpreg: [emprego.tEmpreg, [Validators.minLength(10)]],
      data: [emprego.data, [Validators.minLength(10)]],
      linkEmpresa: [emprego.linkEmpresa, [Validators.maxLength(10)]]
    });

  }


  onSubmit() {
    this.submitted = true;
    console.log(this.cadastro.value);
    if (this.cadastro.valid) {
      console.log('submit');

      let msgSuccess = 'Curso criado com sucesso!';
      let msgError = 'Erro ao criar curso';
      if (this.cadastro.value.id) {
        msgSuccess = 'Curso atulizado com sucesso!';
        msgError = 'Erro ao criar curso';
      }

      this.trabalho.save(this.cadastro.value).subscribe(
        success => {
          this.modal.alertMsgSuccess(msgSuccess);
          this.location.back();
        },
        error => this.modal.alertMsgWarning(msgError)
      );
    }
  }
  onCancel() {
    this.submitted = false;
    this.cadastro.reset();
  }
}
