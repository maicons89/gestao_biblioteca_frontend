import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario } from '../model/usuario';
import { UsuariosService } from './../services/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  @Output() adicionar = new EventEmitter(false);
  @Output() detalhar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() deletar = new EventEmitter(false);


  readonly displayedColumns = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource!: MatTableDataSource<Usuario>;

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.listarTodos().subscribe((dados) => {
      this.dataSource = new MatTableDataSource(dados);
    }
   );
 }
  ngOnInit(): void {
  }

  onAdicionar() {
    this.adicionar.emit(true);
  }

  onEditar(usuario: Usuario) {
    this.editar.emit(usuario);
  }

  onDetalhar(usuario: Usuario) {
    this.detalhar.emit(usuario);
  }


  onDeletar(usuario: Usuario) {
    this.deletar.emit(usuario);
  }

  doFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }
}
