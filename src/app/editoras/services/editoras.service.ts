import { Injectable } from '@angular/core';
import { Editora } from '../model/editora';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

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
      delay(5000),
      tap(editoras => console.log(editoras))
    );

  }

}
