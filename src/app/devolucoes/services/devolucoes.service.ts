import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { ExemplarEmprestimo } from './../../emprestimos/model/exemplarEmprestimo';

@Injectable({
  providedIn: 'root'
})
export class DevolucoesService {

  private readonly API = 'api/exemplarEmprestimo';

  constructor(private httpClient: HttpClient) { }

  listarTodosEmAberto() {
    return this.httpClient.get<ExemplarEmprestimo[]>(`${this.API}/emAberto`)
    .pipe(
      first(),
      delay(500)
    );
  }

  loadById(id: number) {
    return this.httpClient.get<ExemplarEmprestimo>(`${this.API}/${id}`);
  }

  salvar(record: Partial<ExemplarEmprestimo>) {
    record.dataDevolucao = record.dataDevolucao!=null ? record.dataDevolucao.split('-').join('/') : '';
    record.dataEmprestimo = record.dataEmprestimo!=null ? record.dataEmprestimo.split('-').join('/') : '';
    record.dataDevolucaoPrevista = record.dataDevolucaoPrevista!=null ? record.dataDevolucaoPrevista.split('-').join('/') : '';
    if (record.id){
      return this.atualizar(record);
    }
    return this.criar(record);
  }

  private criar(record: Partial<ExemplarEmprestimo>){
    return this.httpClient.post<ExemplarEmprestimo>(this.API, record).pipe(first());
  }

  private atualizar(record: Partial<ExemplarEmprestimo>){
    return this.httpClient.put<ExemplarEmprestimo>(`${this.API}/${record.id}`, record).pipe(first());
  }

}
