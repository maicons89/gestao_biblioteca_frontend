import { Injectable } from '@angular/core';
import { Exemplar } from '../model/exemplar';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExemplaresService {

  private readonly API = 'api/exemplar';

  constructor(private httpClient: HttpClient) { }

  listarTodos() {
    return this.httpClient.get<Exemplar[]>(this.API)
    .pipe(
      first(),
      delay(500)
    );
  }

  listarTodosComQuantidadeDisponivel() {
    return this.httpClient.get<Exemplar[]>(`${this.API}/listaTodosDisponiveis`)
    .pipe(
      first(),
      delay(500)
    );
  }

  loadById(id: number) {
    return this.httpClient.get<Exemplar>(`${this.API}/${id}`);
  }

  salvar(record: Partial<Exemplar>) {
    if (record.id){
      return this.atualizar(record);
    }
    return this.criar(record);
  }

  private criar(record: Partial<Exemplar>){
    return this.httpClient.post<Exemplar>(this.API, record).pipe(first());
  }

  private atualizar(record: Partial<Exemplar>){
    return this.httpClient.put<Exemplar>(`${this.API}/${record.id}`, record).pipe(first());
  }

  deletar(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
