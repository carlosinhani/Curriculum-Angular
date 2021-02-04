import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BootcampsService } from './../../service/bootcamps.service';
import { Registro } from 'src/app/shared/models/registros';
import { MsgService } from 'src/app/shared/msg/msg.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject, empty } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'cursos-bootcamps',
  templateUrl: './cursos-bootcamps.component.html',
  styleUrls: ['./cursos-bootcamps.component.css'],
  preserveWhitespaces: true
})
export class CursosBootcampsComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  cursos$: Observable<Registro[]>;
  error$ = new Subject<boolean>();

  cursoSelecionado: Registro;


  constructor(
    private bootService: BootcampsService,
    private modalService: BsModalService,
    private msgService: MsgService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.onRefresh()
  }

  onRefresh() {
    this.cursos$ = this.bootService.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.handleError();
          return empty();
        })
      );
    this.bootService.list()
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
    this.msgService.alertMsgWarning('Erro ao carregar bootcamps.')
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  onDelete(curso) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.bootService.remove(this.cursoSelecionado.id)
      .subscribe(
        success => {
          this.onRefresh(),
            this.deleteModalRef.hide();
        },
        error => {
          this.msgService.alertMsgWarning('Erro ao deletar bootcamp.')
          this.deleteModalRef.hide();
        }
      );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}
