import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Assunto } from '../model/assunto';
import { AssuntosService } from './../services/assuntos.service';

@Component({
  selector: 'app-assuntos-list',
  templateUrl: './assuntos-list.component.html',
  styleUrls: ['./assuntos-list.component.css']
})
export class AssuntosListComponent implements OnInit {

  @Output() adicionar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() deletar = new EventEmitter(false);


  readonly displayedColumns = ['id', 'nome', 'cdd', 'acoes'];
  dataSource!: MatTableDataSource<Assunto>;

  constructor(private assuntosService: AssuntosService) {
    this.assuntosService.listarTodos().subscribe((dados) => {
      this.dataSource = new MatTableDataSource(dados);
    }
   );
 }
  ngOnInit(): void {
  }

  onAdicionar() {
    this.adicionar.emit(true);
  }

  onEditar(assunto: Assunto) {
    this.editar.emit(assunto);
  }

  onDeletar(assunto: Assunto) {
    this.deletar.emit(assunto);
  }

  doFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }
}
