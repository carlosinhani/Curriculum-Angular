import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Registro } from 'src/app/shared/models/registros';
import { TaOkService } from '../../service/ta-Ok.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  preserveWhitespaces: true
})
export class CursosComponent implements OnInit {

  cursos: Registro[];

  constructor(
    private ok: TaOkService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ok.list()
    .subscribe(dados => this.cursos = dados);
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

}
