import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MsgService } from 'src/app/shared/msg/msg.service';
import { TrabalhoService } from './../../service/trabalho.service';
import { Profissional } from './../../shared/models/profissional';

import { Observable } from 'rxjs/internal/Observable';
import { empty, Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.css'],
  preserveWhitespaces: true
})
export class TrabalhoComponent implements OnInit {
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  cursos$: Observable<Profissional[]>;
  error$ = new Subject<boolean>();

  cursoSelecionado: Profissional;


  constructor(
    private trabalho: TrabalhoService ,
    private modalService: BsModalService,
    private msgService: MsgService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.onRefresh()
  }

  onRefresh() {
    this.cursos$ = this.trabalho.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.handleError();
          return empty();
        })
      );
    this.trabalho.list()
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
    this.msgService.alertMsgWarning('Erro ao carregar Trabalhos.')
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  onDelete(curso) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.trabalho.remove(this.cursoSelecionado.id)
      .subscribe(
        success => {
          this.onRefresh(),
            this.deleteModalRef.hide();
        },
        error => {
          this.msgService.alertMsgWarning('Erro ao deletar Trabalho.')
          this.deleteModalRef.hide();
        }
      );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}
