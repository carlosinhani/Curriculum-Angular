import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, take, tap } from 'rxjs/operators';
import { Registro } from '../shared/models/registros';
import { environment } from 'src/environments/environment';



  @Injectable({
    providedIn: 'root'
  })
  export class BootcampsService {

      private readonly API = `${environment.API}bootcamps`;

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

    localizaID(id){
      return this.http.get<Registro>(`${this.API}/${id}`).pipe(take(1));
    }

   private newCurso(curso) {
      return this.http.post(this.API, curso).pipe(take(1));
    }

   private update(curso) {
        return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
    }

    remove(id) {
      return this.http.delete(`${this.API}/${id}`).pipe(take(1))
    }

    save(curso) {
      if (curso.id) {
        return this.update(curso);
      }
      return this.newCurso(curso);
    }
  }
