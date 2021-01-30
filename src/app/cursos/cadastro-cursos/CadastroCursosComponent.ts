import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { TaOkService } from './../../service/ta-Ok.service';
import { Registro } from 'src/app/shared/models/registros';


@Component({
  selector: 'app-cadastro-cursos',
  templateUrl: './cadastro-cursos.component.html',
  styleUrls: ['./cadastro-cursos.component.css'],
  preserveWhitespaces: true
})
export class CadastroCursosComponent implements OnInit {

  id: number;
  cadastro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ok: TaOkService,
    private activatedRoute: ActivatedRoute
  ) { }

  get f(){
    return this.cadastro.controls;
  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.ok.autenticar(this.id)
        .subscribe((registro: Registro) => this.criarFormulario(registro));
    } else {
      this.criarFormulario(this.formularioBranco());
    }
  }

  private criarFormulario(registro: Registro): void {
    this.cadastro = this.fb.group({
      instituicao: [registro.instituicao, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      cursos: [registro.cursos, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      data: [registro.data, [Validators.required]],
      cargaH: [registro.cargaH, [Validators.required]],
      descricao: [registro.descricao, [Validators.required]],
      urlFoto: [registro.urlFoto, [Validators.minLength(10)]],
      linkCurso: [registro.linkCurso, [Validators.minLength(10)]]
    });
  }

  private formularioBranco(): Registro {
    return {
      id: null,
      instituicao: null,
      cursos: null,
      data: null,
      cargaH: null,
      descricao: null,
      urlFoto: null,
      linkCurso: null,
    } as Registro
  }
}
