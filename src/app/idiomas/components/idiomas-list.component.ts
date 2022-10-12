import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Idioma } from '../model/idioma';
import { IdiomasService } from '../services/idiomas.service';

@Component({
  selector: 'app-idiomas-list',
  templateUrl: './idiomas-list.component.html',
  styleUrls: ['./idiomas-list.component.css']
})
export class IdiomasListComponent implements OnInit {

  @Output() adicionar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() deletar = new EventEmitter(false);

  readonly displayedColumns = ['id', 'idioma', 'sigla', 'acoes'];
  dataSource!: MatTableDataSource<Idioma>;

  constructor(private idiomaService: IdiomasService) {
    this.idiomaService.listarTodos().subscribe((dados) => {
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

  onEditar(idioma: Idioma) {
    this.editar.emit(idioma);
  }

  onDeletar(idioma: Idioma) {
    this.deletar.emit(idioma);
  }

  doFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }
}
