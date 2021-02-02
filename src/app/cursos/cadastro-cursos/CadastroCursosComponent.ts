import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TaOkService } from './../../service/ta-Ok.service';

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
  ) { }

  ngOnInit() {

    this.cadastro = this.fb.group({
      instituicao: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      cursos: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      data: [null, [Validators.required]],
      cargaH: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
      urlFoto: [null, [Validators.minLength(10)]],
      linkCurso: [null, [Validators.minLength(10)]]
    });

  }
  onSubmit() {
    if (this.cadastro.valid) {
      this.submitted = true;
      console.log(this.cadastro.value);
      if (this.cadastro.valid) {
        console.log('submit');
        this.ok.newCurso(this.cadastro.value).subscribe(
          success => console.log('sucesso'),
          error => console.error(error),
          () => console.log('request completo')
        );
      }
    } else {
      console.log('cadastro invalido');
      Object.keys(this.cadastro.controls).forEach(campo => {
        console.log(campo);
        const confirmar = this.cadastro.get(campo);
        confirmar.markAsDirty();
      });
    }
  }

  onCancel() {
    this.submitted = false;
    this.cadastro.reset();
  }

  verificaValidTouched(campo) {
    return !this.cadastro.get(campo).valid && this.cadastro.get(campo).touched || this.cadastro.get(campo).dirty;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
}
