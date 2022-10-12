import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Idioma } from '../../model/idioma';
import { IdiomasService } from '../../services/idiomas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  idiomas$: Observable<Idioma[]> | null = null;;

  constructor(
    private idiomasService: IdiomasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    ){
      this.refresh();
    }

    refresh() {
      this.idiomas$ = this.idiomasService.listarTodos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar idiomas.');
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

  onEditar(idioma: Idioma) {
    this.router.navigate(['editar', idioma.id], {relativeTo: this.route});
  }

  onDeletar(idioma: Idioma) {
    this.idiomasService.deletar(idioma.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Idioma removido com sucesso!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      () => this.onError('Erro ao tentar remover idioma.')
    );
  }

}
