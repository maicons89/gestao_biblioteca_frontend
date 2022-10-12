import { Injectable } from '@angular/core';
import { Assunto } from '../model/assunto';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssuntosService {

  private readonly API = 'api/assunto';

  constructor(private httpClient: HttpClient) { }

  listarTodos() {
    return this.httpClient.get<Assunto[]>(this.API)
    .pipe(
      first(),
      delay(500)
    );
  }

  loadById(id: number) {
    return this.httpClient.get<Assunto>(`${this.API}/${id}`);
  }

  salvar(record: Partial<Assunto>) {
    if (record.id){
      return this.atualizar(record);
    }
    return this.criar(record);
  }

  private criar(record: Partial<Assunto>){
    return this.httpClient.post<Assunto>(this.API, record).pipe(first());
  }

  private atualizar(record: Partial<Assunto>){
    return this.httpClient.put<Assunto>(`${this.API}/${record.id}`, record).pipe(first());
  }

  deletar(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
