import { Injectable } from '@angular/core';
import { Livro } from '../model/livro';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = 'api/livro';

  constructor(private httpClient: HttpClient) { }

  listarTodos() {
    return this.httpClient.get<Livro[]>(this.API)
    .pipe(
      first(),
      delay(500)
    );
  }

  loadById(id: number) {
    return this.httpClient.get<Livro>(`${this.API}/${id}`);
  }

  salvar(record: Partial<Livro>) {
    if (record.id){
      return this.atualizar(record);
    }
    return this.criar(record);
  }

  private criar(record: Partial<Livro>){
    return this.httpClient.post<Livro>(this.API, record).pipe(first());
  }

  private atualizar(record: Partial<Livro>){
    return this.httpClient.put<Livro>(`${this.API}/${record.id}`, record).pipe(first());
  }

  deletar(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
