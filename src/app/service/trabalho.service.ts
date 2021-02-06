import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Profissional } from './../shared/models/profissional';
import { environment } from 'src/environments/environment';

import { delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrabalhoService {

  private readonly API = `${environment.API}trabalho`;

  constructor(
    private http: HttpClient,
  ) { }

  list() {
    return this.http.get<Profissional[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  localizaID(id){
    return this.http.get<Profissional>(`${this.API}/${id}`).pipe(take(1));
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
