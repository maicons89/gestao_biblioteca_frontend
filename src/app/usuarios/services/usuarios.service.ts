import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'api/usuario';

  constructor(private httpClient: HttpClient) { }

  listarTodos() {
    return this.httpClient.get<Usuario[]>(this.API)
    .pipe(
      first(),
      delay(500)
    );
  }

  loadById(id: number) {
    return this.httpClient.get<Usuario>(`${this.API}/${id}`);
  }

  salvar(record: Partial<Usuario>) {
    if (record.id){
      return this.atualizar(record);
    }
    return this.criar(record);
  }

  private criar(record: Partial<Usuario>){
    return this.httpClient.post<Usuario>(this.API, record).pipe(first());
  }

  private atualizar(record: Partial<Usuario>){
    return this.httpClient.put<Usuario>(`${this.API}/${record.id}`, record).pipe(first());
  }

  deletar(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
