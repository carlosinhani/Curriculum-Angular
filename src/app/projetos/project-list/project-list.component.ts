import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { gitHub } from 'src/app/shared/models/project';
import { Observable } from 'rxjs/internal/Observable';
import { empty, Subject } from 'rxjs';
import { ProjService } from 'src/app/service/proj.service';
import { MsgService } from 'src/app/shared/msg/msg.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  preserveWhitespaces: true
})
export class ProjectListComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  cursos$: Observable<gitHub[]>;
  error$ = new Subject<boolean>();

  cursoSelecionado: gitHub;


  constructor(
    private commit: ProjService,
    private modalService: BsModalService,
    private msgService: MsgService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.onRefresh()
  }

  onRefresh() {
    this.cursos$ = this.commit.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.handleError();
          return empty();
        })
      );
    this.commit.list()
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
    this.msgService.alertMsgWarning('Erro ao carregar Projetos.')
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  onDelete(curso) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.commit.remove(this.cursoSelecionado.id)
      .subscribe(
        success => {
          this.onRefresh(),
            this.deleteModalRef.hide();
        },
        error => {
          this.msgService.alertMsgWarning('Erro ao deletar Projeto.')
          this.deleteModalRef.hide();
        }
      );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}
