import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Registro } from '../shared/models/registros';

import { delay, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaOkService {

    private readonly API = `${environment.API}cursos`;

  constructor(
    private http: HttpClient,
  ) { }

  list() {
    return this.http.get<Registro[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  newCurso(registros: Registro): Observable<Registro>{
    return this.http.post<Registro>(this.API, registros);
  }

}
