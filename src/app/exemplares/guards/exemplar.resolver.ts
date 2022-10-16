import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Exemplar } from '../model/exemplar';
import { ExemplaresService } from '../services/exemplares.service';

@Injectable({
  providedIn: 'root'
})
export class ExemplarResolver implements Resolve<Exemplar> {

  constructor(private service: ExemplaresService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Exemplar> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of( ...arguments,{id: '', codigoExemplar: ''});
  }
}
