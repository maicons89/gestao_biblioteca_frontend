import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ExemplarEmprestimo } from '../model/exemplarEmprestimo';
import { EmprestimosService } from '../services/emprestimos.service';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoResolver implements Resolve<ExemplarEmprestimo> {

  constructor(private service: EmprestimosService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExemplarEmprestimo> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of( ...arguments,{id: '', dataEmprestimo: ''});
  }
}
