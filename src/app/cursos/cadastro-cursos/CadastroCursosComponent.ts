import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// import { TaOkService } from './../../service/ta-Ok.service';
// import { Registro } from 'src/app/shared/models/registros';


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
    // private ok: TaOkService,
    // private activatedRoute: ActivatedRoute
  ) { }

  // get f(){
  //   return this.cadastro.controls;
  // }

  ngOnInit() {

    //   this.id = this.activatedRoute.snapshot.params['id'];
    //   if (this.id) {
    //     this.ok.autenticar(this.id)
    //       .subscribe((registro: Registro) => this.criarFormulario(registro));
    //   } else {
    //     this.criarFormulario(this.formularioBranco());
    //   }
    // }

    // private criarFormulario(registro: Registro): void {
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

    console.log(this.cadastro);
    if (this.cadastro.value) {
      console.log('submit');
    }
  }

  onCancel() {
    console.log('onCancel');
  }

  // private formularioBranco(): Registro {
  //   return {
  //     id: null,
  //     instituicao: null,
  //     cursos: null,
  //     data: null,
  //     cargaH: null,
  //     descricao: null,
  //     urlFoto: null,
  //     linkCurso: null,
  //   } as Registro
  //}
}
