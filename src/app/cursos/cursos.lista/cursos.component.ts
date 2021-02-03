import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Registro } from 'src/app/shared/models/registros';
import { TaOkService } from '../../service/ta-Ok.service';
import { AlertModalComponent } from 'src/app/shared/msg/alert-modal/alert-modal.component';

import { Observable } from 'rxjs/internal/Observable';
import { empty, Subject } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  preserveWhitespaces: true
})
export class CursosComponent implements OnInit {

  // cursos: Registro[];
  cursos$: Observable<Registro[]>;
  error$ = new Subject<boolean>();
  bsModalRef: BsModalRef;

  constructor(
    private ok: TaOkService,
    private modalService: BsModalService,
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

  handleError(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.corMsg = 'warning';
    this.bsModalRef.content.msg = 'Erro ao carregar cursos.';
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

}
