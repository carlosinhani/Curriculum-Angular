import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BootcampsService } from './../../service/bootcamps.service';
import { MsgService } from 'src/app/shared/msg/msg.service';

@Component({
  selector: 'app-bootcamps-cadastro',
  templateUrl: './bootcamps-cadastro.component.html',
  styleUrls: ['./bootcamps-cadastro.component.css'],
  preserveWhitespaces: true
})
export class BootcampsCadastroComponent implements OnInit {

  cadastro: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private bootService: BootcampsService,
    private route: ActivatedRoute,
    private modal: MsgService,
    private location: Location

  ) { }

  ngOnInit() {

    const bootscamp = this.route.snapshot.data['bootscamp'];

    this.cadastro = this.fb.group({
      id: [bootscamp.id],
      instituicao: [bootscamp.instituicao, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      cursos: [bootscamp.cursos, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      data: [bootscamp.data, [Validators.required]],
      cargaH: [bootscamp.cargaH, [Validators.required]],
      descricao: [bootscamp.descricao, [Validators.minLength(5)]],
      urlFoto: [bootscamp.urlFoto, [Validators.minLength(10)]],
      linkCurso: [bootscamp.linkCurso, [Validators.minLength(10)]],
    });

  }


  onSubmit() {
    this.submitted = true;
    console.log(this.cadastro.value);
    if (this.cadastro.valid) {
      console.log('submit');

      let msgSuccess = 'Bootcamp criado com sucesso!';
      let msgError = 'Erro ao criar bootcamp';
      if (this.cadastro.value.id) {
        msgSuccess = 'Bootcamp atulizado com sucesso!';
        msgError = 'Erro ao criar Bootcamp';
      }

      this.bootService.save(this.cadastro.value).subscribe(
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
