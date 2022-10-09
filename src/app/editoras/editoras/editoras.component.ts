import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Editora } from '../model/editora';
import { EditorasService } from '../services/editoras.service';

@Component({
  selector: 'app-editoras',
  templateUrl: './editoras.component.html',
  styleUrls: ['./editoras.component.css']
})
export class EditorasComponent implements OnInit {

  editoras$: Observable<Editora[]>;
  displayedColumns = ['id', 'nome'];

  constructor(
    private editorasService: EditorasService,
    public dialog: MatDialog
    ) {
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

}
