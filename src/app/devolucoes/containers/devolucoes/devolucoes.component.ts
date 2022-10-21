import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ExemplarEmprestimo } from './../../../emprestimos/model/exemplarEmprestimo';
import { DevolucoesService } from './../../services/devolucoes.service';

@Component({
  selector: 'app-devolucoes',
  templateUrl: './devolucoes.component.html',
  styleUrls: ['./devolucoes.component.css']
})
export class DevolucoesComponent implements OnInit {

  devolucoes$: Observable<ExemplarEmprestimo[]> | null = null;;

  constructor(
    private devolucoesService: DevolucoesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    ){
      this.refresh();
    }

    refresh() {
      this.devolucoes$ = this.devolucoesService.listarTodosEmAberto()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar devoluções.');
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

  onDevolver(exemplarEmprestimo: ExemplarEmprestimo) {
    this.router.navigate(['devolver', exemplarEmprestimo.id], {relativeTo: this.route,  queryParams: { devolver: true }});
  }
}
