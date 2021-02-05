import { ProjService } from './../../service/proj.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MsgService } from 'src/app/shared/msg/msg.service';
import { Location } from '@angular/common';


@Component({
  selector: 'commit-proj',
  templateUrl: './commit-proj.component.html',
  styleUrls: ['./commit-proj.component.css']
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
      LFP: [proj.instituicao, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      data: [proj.data, [Validators.required]],
      commit: [proj.cargaH, [Validators.required]],
      linkProj: [proj.linkCurso, [Validators.minLength(10)]],
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
