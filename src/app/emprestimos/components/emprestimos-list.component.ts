import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { ExemplarEmprestimo } from '../model/exemplarEmprestimo';
import { EmprestimosService } from '../services/emprestimos.service';

@Component({
  selector: 'app-emprestimos-list',
  templateUrl: './emprestimos-list.component.html',
  styleUrls: ['./emprestimos-list.component.css']
})
export class EmprestimosListComponent implements OnInit {

  @Output() adicionar = new EventEmitter(false);
  @Output() detalhar = new EventEmitter(false);


  readonly displayedColumns = ['tituloPrincipal', 'cpf', 'dataEmprestimo', 'dataDevolucaoPrevista', 'acoes'];
  dataSource!: MatTableDataSource<ExemplarEmprestimo>;

  constructor(private emprestimosService: EmprestimosService) {
    this.emprestimosService.listarTodosEmAberto().subscribe((dados) => {
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

  onDetalhar(exemplarEmprestimo: ExemplarEmprestimo) {
    this.detalhar.emit(exemplarEmprestimo);
  }

  doFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }
}
