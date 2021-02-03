import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Registro } from 'src/app/shared/models/registros';
import { TaOkService } from '../../service/ta-Ok.service';
import { MsgService } from 'src/app/shared/msg/msg.service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/internal/Observable';
import { empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  preserveWhitespaces: true
})
export class CursosComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  cursos$: Observable<Registro[]>;
  error$ = new Subject<boolean>();

  cursoSelecionado: Registro;


  constructor(
    private ok: TaOkService,
    private modalService: BsModalService,
    private msgService: MsgService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.onRefresh()
  }

  onRefresh() {
    this.cursos$ = this.ok.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.handleError();
          return empty();
        })
      );
    this.ok.list()
      .pipe(
        catchError(error => empty())
      )
      .subscribe(
        dados => {
          console.log(dados);
        }
      )
  }

  handleError() {
    this.msgService.alertMsgWarning('Erro ao carregar cursos.')
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  onDelete(curso) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.ok.remove(this.cursoSelecionado.id)
      .subscribe(
        success => {
          this.onRefresh(),
            this.deleteModalRef.hide();
        },
        error => {
          this.msgService.alertMsgWarning('Erro ao deletar curso.')
          this.deleteModalRef.hide();
        }
      );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}
