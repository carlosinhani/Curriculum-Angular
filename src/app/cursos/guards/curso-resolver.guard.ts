
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { TaOkService } from './../../service/ta-Ok.service';
import { Registro } from 'src/app/shared/models/registros';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Registro> {

  constructor(
    private ok: TaOkService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Registro> {

    if (route.params && route.params['id']) {
      return this.ok.localizaID(route.params['id']);
    }

    return of({
      id: null,
      instituicao: null,
      cursos: null,
      data: null,
      cargaH: null,
      descricao: null,
      urlFoto: null,
      linkCurso: null
    });
  }
}
