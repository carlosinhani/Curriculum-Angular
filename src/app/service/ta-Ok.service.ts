import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Registro } from '../shared/models/registros';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class TaOkService {

  private readonly API = "http://localhost:3000/cursos";

  constructor(
    private http: HttpClient,
  ) { }

  list() {
    return this.http.get<Registro[]>(this.API)
    .pipe (
      tap(console.log)
    )
  }



}
