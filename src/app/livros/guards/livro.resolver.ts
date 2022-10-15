import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Livro } from '../model/livro';
import { LivrosService } from '../services/livros.service';

@Injectable({
  providedIn: 'root'
})
export class LivroResolver implements Resolve<Livro> {

  constructor(private service: LivrosService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Livro> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of( ...arguments,{id: '', isbn: ''});
  }
}
