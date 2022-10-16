import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, first, throwError } from 'rxjs';

import { Editora } from '../model/editora';

@Injectable({
  providedIn: 'root'
})
export class EditorasService {

  private readonly API = 'api/editora';

  constructor(private httpClient: HttpClient) { }

  listarTodos() {
    return this.httpClient.get<Editora[]>(this.API)
    .pipe(
      first(),
      delay(500)
    );
  }

  loadById(id: number) {
    return this.httpClient.get<Editora>(`${this.API}/${id}`);
  }

  salvar(record: Partial<Editora>) {
    if (record.id){
      return this.atualizar(record);
    }
    return this.criar(record);
  }

  private criar(record: Partial<Editora>){
    return this.httpClient.post<Editora>(this.API, record).pipe(first());
  }

  private atualizar(record: Partial<Editora>){
    return this.httpClient.put<Editora>(`${this.API}/${record.id}`, record).pipe(first());
  }

  deletar(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first(), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    return throwError(error.error.mensagem || "Erro ao tentar remover editora.")
  }

}
