import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Assunto } from '../model/assunto';
import { AssuntosService } from '../services/assuntos.service';

@Injectable({
  providedIn: 'root'
})
export class AssuntoResolver implements Resolve<Assunto> {

  constructor(private service: AssuntosService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Assunto> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of( ...arguments,{id: '', nome: ''});
  }
}
