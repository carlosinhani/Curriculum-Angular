import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { BootcampsService } from './../../service/bootcamps.service';
import { Registro } from 'src/app/shared/models/registros';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BootcampsResolverGuard implements Resolve<Registro> {


  constructor(
    private bootService: BootcampsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Registro> {

    if (route.params && route.params['id']) {
      return this.bootService.localizaID(route.params['id']);
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


