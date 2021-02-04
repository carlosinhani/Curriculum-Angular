import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaOkService } from './../../service/ta-Ok.service';
import { MsgService } from './../../shared/msg/msg.service';


@Component({
  selector: 'app-cadastro-cursos',
  templateUrl: './cadastro-cursos.component.html',
  styleUrls: ['./cadastro-cursos.component.css'],
  preserveWhitespaces: true
})
export class CadastroCursosComponent implements OnInit {


  cadastro: FormGroup;
  submitted = false;


  constructor(
    private fb: FormBuilder,
    private ok: TaOkService,
    private route: ActivatedRoute,
    private modal: MsgService,
    private location: Location

  ) { }

  ngOnInit() {

    const curso = this.route.snapshot.data['curso'];

    this.cadastro = this.fb.group({
      id: [curso.id],
      instituicao: [curso.instituicao, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      cursos: [curso.cursos, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      data: [curso.data, [Validators.required]],
      cargaH: [curso.cargaH, [Validators.required]],
      descricao: [curso.descricao, [Validators.minLength(5)]],
      urlFoto: [curso.urlFoto, [Validators.minLength(10)]],
      linkCurso: [curso.linkCurso, [Validators.minLength(10)]],
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

      this.ok.save(this.cadastro.value).subscribe(
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
