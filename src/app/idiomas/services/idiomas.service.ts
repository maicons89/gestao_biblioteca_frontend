import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, first, throwError } from 'rxjs';

import { Idioma } from '../model/idioma';

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
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first(), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    return throwError(error.error.mensagem || "Erro ao tentar remover idioma.")
  }

}
