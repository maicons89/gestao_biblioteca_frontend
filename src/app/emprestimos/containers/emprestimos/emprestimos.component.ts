import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ExemplarEmprestimo } from './../../model/exemplarEmprestimo';
import { EmprestimosService } from './../../services/emprestimos.service';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.css']
})
export class EmprestimosComponent implements OnInit {

  emprestimos$: Observable<ExemplarEmprestimo[]> | null = null;;

  constructor(
    private emprestimosService: EmprestimosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    ){
      this.refresh();
    }

    refresh() {
      this.emprestimos$ = this.emprestimosService.listarTodosEmAberto()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar empréstimos.');
          return of([])
        })
      );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdicionar() {
    this.router.navigate(['novo'], {relativeTo: this.route,  queryParams: { novo: true }});
  }

  onDetalhar(exemplarEmprestimo: ExemplarEmprestimo) {
    this.router.navigate(['detalhar', exemplarEmprestimo.id], {relativeTo: this.route,  queryParams: { readOnly: true }});
  }
}
