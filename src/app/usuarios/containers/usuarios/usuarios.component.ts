import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Usuario } from '../../model/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios$: Observable<Usuario[]> | null = null;;

  constructor(
    private UsuariosService: UsuariosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    ){
      this.refresh();
    }

    refresh() {
      this.usuarios$ = this.UsuariosService.listarTodos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar usuarios.');
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

  onDetalhar(usuario: Usuario) {
    this.router.navigate(['detalhar', usuario.id], {relativeTo: this.route,  queryParams: { readOnly: true }});
  }


  onEditar(usuario: Usuario) {
    this.router.navigate(['editar', usuario.id], {relativeTo: this.route});
  }

  onDeletar(usuario: Usuario) {
    this.UsuariosService.deletar(usuario.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Usuario removido com sucesso!', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      () => this.onError('Erro ao tentar remover usuario.')
    );
  }

}
