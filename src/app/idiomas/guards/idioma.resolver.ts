import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Idioma } from '../model/idioma';
import { IdiomasService } from '../services/idiomas.service';

@Injectable({
  providedIn: 'root'
})
export class IdiomaResolver implements Resolve<Idioma> {

  constructor(private service: IdiomasService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Idioma> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of( ...arguments,{id: '', nome: ''});
  }
}
