import { TrabalhoService } from './../../service/trabalho.service';
import { Profissional } from './../../shared/models/profissional';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabalhoResolverGuard implements Resolve<Profissional> {
  constructor(
    private trabalho: TrabalhoService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profissional> {

    if (route.params && route.params['id']) {
      return this.trabalho.localizaID(route.params['id']);
    }

    return of({
      id: null,
      nomeEmp: null,
      cit: null,
      est: null,
      tel: null,
      cargo: null,
      tEmpreg: null,
      data: null,
      descricao: null,
      linkEmpresa: null
    });
  }
}
