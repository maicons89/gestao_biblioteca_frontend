import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Autor } from '../model/autor';
import { AutoresService } from '../services/autores.service';

@Injectable({
  providedIn: 'root'
})
export class AutorResolver implements Resolve<Autor> {

  constructor(private service: AutoresService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Autor> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of( ...arguments,{id: '', nome: ''});
  }
}
