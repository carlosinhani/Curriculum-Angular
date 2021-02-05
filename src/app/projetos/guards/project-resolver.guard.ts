import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { ProjService } from './../../service/proj.service';
import { gitHub } from 'src/app/shared/models/project';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolverGuard implements Resolve<gitHub> {
  constructor(
    private commit: ProjService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<gitHub> {

    if (route.params && route.params['id']) {
      return this.commit.localizaID(route.params['id']);
    }

    return of({
      id: null,
      nomeProj: null,
      lfp: null,
      data: null,
      commit: null,
      linkProj: null,
    });
  }
}
