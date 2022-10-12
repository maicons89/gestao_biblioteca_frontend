import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Editora } from '../model/editora';
import { EditorasService } from '../services/editoras.service';

@Injectable({
  providedIn: 'root'
})
export class EditoraResolver implements Resolve<Editora> {

  constructor(private service: EditorasService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Editora> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of( ...arguments,{id: '', nome: ''});
  }
}
