import { Injectable } from '@angular/core';
import { Autor } from '../model/autor';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private readonly API = 'api/autor';

  constructor(private httpClient: HttpClient) { }

  listarTodos() {
    return this.httpClient.get<Autor[]>(this.API)
    .pipe(
      first(),
      delay(500)
    );
  }

  loadById(id: number) {
    return this.httpClient.get<Autor>(`${this.API}/${id}`);
  }

  salvar(record: Partial<Autor>) {
    if (record.id){
      return this.atualizar(record);
    }
    return this.criar(record);
  }

  private criar(record: Partial<Autor>){
    record.dataNascimento = record.dataNascimento!=null ? record.dataNascimento.split('-').join('/') : '';
    record.dataFalecimento = record.dataFalecimento!=null ? record.dataFalecimento.split('-').join('/') : '';
    return this.httpClient.post<Autor>(this.API, record).pipe(first());
  }

  private atualizar(record: Partial<Autor>){
    record.dataNascimento = record.dataNascimento!=null ? record.dataNascimento.split('-').join('/') : '';
    record.dataFalecimento = record.dataFalecimento!=null ? record.dataFalecimento.split('-').join('/') : '';
    return this.httpClient.put<Autor>(`${this.API}/${record.id}`, record).pipe(first());
  }

  deletar(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }



}
