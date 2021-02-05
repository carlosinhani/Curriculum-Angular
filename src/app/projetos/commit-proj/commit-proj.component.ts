import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjService } from './../../service/proj.service';
import { MsgService } from 'src/app/shared/msg/msg.service';



@Component({
  selector: 'commit-proj',
  templateUrl: './commit-proj.component.html',
  styleUrls: ['./commit-proj.component.css'],
  preserveWhitespaces: true
})
export class CommitProjComponent implements OnInit {

  cadastro: FormGroup;
  submitted = false;


  constructor(
    private fb: FormBuilder,
    private commit: ProjService,
    private route: ActivatedRoute,
    private modal: MsgService,
    private location: Location

  ) { }

  ngOnInit() {

    const proj = this.route.snapshot.data['proj'];

    this.cadastro = this.fb.group({
      id: [proj.id],
      nomeProj: [proj.nomeProj, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      lfp: [proj.lfp, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      data: [proj.data, [Validators.required]],
      commit: [proj.commit, [Validators.required]],
      linkProj: [proj.linkCurso, [Validators.minLength(10)]],
    });

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.cadastro.value);
    if (this.cadastro.valid) {
      console.log('submit');

      let msgSuccess = 'Projeto criado com sucesso!';
      let msgError = 'Erro ao criar projeto';
      if (this.cadastro.value.id) {
        msgSuccess = 'Projeto atulizado com sucesso!';
        msgError = 'Erro ao criar projeto';
      }

      this.commit.save(this.cadastro.value).subscribe(
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
