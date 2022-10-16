import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Editora } from '../../model/editora';
import { EditorasService } from '../../services/editoras.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editoras',
  templateUrl: './editoras.component.html',
  styleUrls: ['./editoras.component.css']
})
export class EditorasComponent implements OnInit {

  editoras$: Observable<Editora[]> | null = null;;

  constructor(
    private editorasService: EditorasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    ){
      this.refresh();
    }

    refresh() {
      this.editoras$ = this.editorasService.listarTodos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar editoras.');
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

  onEditar(editora: Editora) {
    this.router.navigate(['editar', editora.id], {relativeTo: this.route});
  }

  onDeletar(editora: Editora) {
    this.editorasService.deletar(editora.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Editora removida com sucesso!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      (err) => this.onError(err)
    );
  }

}
