import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { ExemplarEmprestimo } from '../../emprestimos/model/exemplarEmprestimo'
import { DevolucoesService } from '../services/devolucoes.service';

@Component({
  selector: 'app-devolucoes-list',
  templateUrl: './devolucoes-list.component.html',
  styleUrls: ['./devolucoes-list.component.css']
})
export class DevolucoesListComponent implements OnInit {

  @Output() adicionar = new EventEmitter(false);
  @Output() detalhar = new EventEmitter(false);
  @Output() devolver = new EventEmitter(false);


  readonly displayedColumns = ['tituloPrincipal', 'cpf', 'dataEmprestimo', 'dataDevolucaoPrevista', 'acoes'];
  dataSource!: MatTableDataSource<ExemplarEmprestimo>;

  constructor(private devolucoesService: DevolucoesService) {
    this.devolucoesService.listarTodosEmAberto().subscribe((dados) => {
      this.dataSource = new MatTableDataSource(dados);
    }
   );
 }
  ngOnInit(): void {
  }

  onAdicionar() {
    this.adicionar.emit(true);
  }

  onDetalhar(exemplarEmprestimo: ExemplarEmprestimo) {
    this.detalhar.emit(exemplarEmprestimo);
  }

  onDevolver(exemplarEmprestimo: ExemplarEmprestimo) {
    this.devolver.emit(exemplarEmprestimo);
  }


  doFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }
}
