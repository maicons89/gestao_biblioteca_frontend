import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Autor } from '../model/autor';
import { AutoresService } from './../services/autores.service';

@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.css']
})
export class AutoresListComponent implements OnInit {

  @Output() adicionar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() deletar = new EventEmitter(false);


  readonly displayedColumns = ['id', 'nome', 'codigoCutter', 'dataNascimento', 'dataFalecimento', 'acoes'];
  dataSource!: MatTableDataSource<Autor>;

  constructor(private autoresService: AutoresService) {
    this.autoresService.listarTodos().subscribe((dados) => {
      console.log(dados);
      this.dataSource = new MatTableDataSource(dados);
    }
   );
 }
  ngOnInit(): void {
  }

  onAdicionar() {
    this.adicionar.emit(true);
  }

  onEditar(autor: Autor) {
    this.editar.emit(autor);
  }

  onDeletar(autor: Autor) {
    this.deletar.emit(autor);
  }

  doFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }
}
