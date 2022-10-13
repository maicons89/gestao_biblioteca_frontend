import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Autor } from '../../model/autor';
import { AutoresService } from '../../services/autores.service'

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores$: Observable<Autor[]> | null = null;;

  constructor(
    private autoresService: AutoresService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    ){
      this.refresh();
    }

    refresh() {
      this.autores$ = this.autoresService.listarTodos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar autores.');
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

  onEditar(autor: Autor) {
    this.router.navigate(['editar', autor.id], {relativeTo: this.route});
  }

  onDeletar(autor: Autor) {
    this.autoresService.deletar(autor.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Autor removido com sucesso!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      () => this.onError('Erro ao tentar remover autor.')
    );
  }

}
