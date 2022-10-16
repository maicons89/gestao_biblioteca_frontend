import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Assunto } from '../../model/assunto';
import { AssuntosService } from '../../services/assuntos.service';

@Component({
  selector: 'app-assuntos',
  templateUrl: './assuntos.component.html',
  styleUrls: ['./assuntos.component.css']
})
export class AssuntosComponent implements OnInit {

  assuntos$: Observable<Assunto[]> | null = null;;

  constructor(
    private assuntosService: AssuntosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    ){
      this.refresh();
    }

    refresh() {
      this.assuntos$ = this.assuntosService.listarTodos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar assuntos.');
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

  onEditar(assunto: Assunto) {
    this.router.navigate(['editar', assunto.id], {relativeTo: this.route});
  }

  onDeletar(assunto: Assunto) {
    this.assuntosService.deletar(assunto.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Assunto removido com sucesso!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      (err) => {
        this.onError(err)
      }
    );
  }

}
