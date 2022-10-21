import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Livro } from '../model/livro';
import { LivrosService } from './../services/livros.service';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.css']
})
export class LivrosListComponent implements OnInit {

  @Output() adicionar = new EventEmitter(false);
  @Output() detalhar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() cadastrarExemplar = new EventEmitter(false);
  @Output() deletar = new EventEmitter(false);


  readonly displayedColumns = ['id', 'isbn', 'tituloPrincipal', 'numeroEdicao', 'qtdDisponivelEmprestimo', 'acoes'];
  dataSource!: MatTableDataSource<Livro>;

  constructor(private livrosService: LivrosService) {
    this.livrosService.listarTodos().subscribe((dados) => {
      this.dataSource = new MatTableDataSource(dados);
    }
   );
 }
  ngOnInit(): void {
  }

  onAdicionar() {
    this.adicionar.emit(true);
  }

  onDetalhar(livro: Livro) {
    this.detalhar.emit(livro);
  }

  onEditar(livro: Livro) {
    this.editar.emit(livro);
  }

  onAdicionarExemplar(livro: Livro){
    this.cadastrarExemplar.emit(livro);
  }


  onDeletar(livro: Livro) {
    this.deletar.emit(livro);
  }

  doFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }
}
