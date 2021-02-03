import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { TaOkService } from './../../service/ta-Ok.service';
import { MsgService } from './../../shared/msg/msg.service';

import { map, switchMap } from 'rxjs/operators';




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


    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.ok.localizaID(id))
      )
      .subscribe(curso => this.uptateCadastro(curso));

    this.cadastro = this.fb.group({
      id: [null],
      instituicao: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      cursos: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      data: [null, [Validators.required]],
      cargaH: [null, [Validators.required]],
      descricao: [null, [Validators.minLength(5)]],
      urlFoto: [null, [Validators.minLength(10)]],
      linkCurso: [null, [Validators.minLength(10)]]
    });

  }


  uptateCadastro(curso) {
    this.cadastro.patchValue({
      id: curso.id,
      instituicao: curso.instituicao,
      cursos: curso.cursos,
      data: curso.data,
      cargaH: curso.cargaH,
      descricao: curso.descricao,
      urlFoto: curso.urlFoto,
      linkCurso: curso.linkCurso
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.cadastro.value);
    if (this.cadastro.valid) {
      console.log('submit');
      this.ok.newCurso(this.cadastro.value).subscribe(
        success => {
          this.modal.alertMsgSuccess('Curso criado Sucesso!');
          this.location.back();
        },
        error => this.modal.alertMsgWarning('Erro ao Criar Curso'),
        () => console.log('request completo')
      );
    }

  }
  onCancel() {
    this.submitted = false;
    this.cadastro.reset();
  }


}
