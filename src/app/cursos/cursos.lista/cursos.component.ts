import { Component, OnInit } from '@angular/core';

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
    private ok: TaOkService
  ) { }

  ngOnInit(): void {
    this.ok.list()
    .subscribe(dados => this.cursos = dados);
  }


}
