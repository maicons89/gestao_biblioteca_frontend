import { Injectable } from '@angular/core';
import { Idioma } from '../model/idioma';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  private readonly API = 'api/idioma';

  constructor(private httpClient: HttpClient) { }

  listarTodos() {
    return this.httpClient.get<Idioma[]>(this.API)
    .pipe(
      first(),
      delay(500)
    );
  }

  loadById(id: number) {
    return this.httpClient.get<Idioma>(`${this.API}/${id}`);
  }

  salvar(record: Partial<Idioma>) {
    if (record.id){
      return this.atualizar(record);
    }
    return this.criar(record);
  }

  private criar(record: Partial<Idioma>){
    return this.httpClient.post<Idioma>(this.API, record).pipe(first());
  }

  private atualizar(record: Partial<Idioma>){
    return this.httpClient.put<Idioma>(`${this.API}/${record.id}`, record).pipe(first());
  }

  deletar(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
