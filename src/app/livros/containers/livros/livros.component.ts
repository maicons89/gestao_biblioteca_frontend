import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Livro } from '../../model/livro';
import { LivrosService } from '../../services/livros.service'

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros$: Observable<Livro[]> | null = null;;

  constructor(
    private livrosService: LivrosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    ){
      this.refresh();
    }

    refresh() {
      this.livros$ = this.livrosService.listarTodos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar livros.');
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
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

  onDetalhar(livro: Livro) {
    this.router.navigate(['detalhar', livro.id], {relativeTo: this.route,  queryParams: { readOnly: true }});
  }

  onEditar(livro: Livro) {
    this.router.navigate(['editar', livro.id], {relativeTo: this.route});
  }

  onDeletar(livro: Livro) {
    this.livrosService.deletar(livro.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Livro removido com sucesso!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      () => this.onError('Erro ao tentar remover livro.')
    );
  }

}
