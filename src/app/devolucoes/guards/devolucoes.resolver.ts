import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ExemplarEmprestimo } from '../../emprestimos/model/exemplarEmprestimo';
import { DevolucoesService } from '../services/devolucoes.service';

@Injectable({
  providedIn: 'root'
})
export class DevolucaoResolver implements Resolve<ExemplarEmprestimo> {

  constructor(private service: DevolucoesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExemplarEmprestimo> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of( ...arguments,{id: '', dataEmprestimo: ''});
  }
}
