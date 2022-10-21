import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Editora } from '../../model/editora';
import { EditorasService } from './../../services/editoras.service';

@Component({
  selector: 'app-editoras-list',
  templateUrl: './editoras-list.component.html',
  styleUrls: ['./editoras-list.component.css']
})
export class EditorasListComponent implements OnInit {

  @Output() adicionar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() deletar = new EventEmitter(false);
  dataSource!: MatTableDataSource<Editora>;


  readonly displayedColumns = ['id', 'nome', 'acoes'];

  constructor(private editorasSerice: EditorasService) {
    this.editorasSerice.listarTodos().subscribe((dados) => {
      this.dataSource = new MatTableDataSource(dados);
    }
   );
 }
  ngOnInit(): void {
  }

  onAdicionar() {
    this.adicionar.emit(true);
  }

  onEditar(editora: Editora) {
    this.editar.emit(editora);
  }

  onDeletar(editora: Editora) {
    this.deletar.emit(editora);
  }

  doFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }
}
