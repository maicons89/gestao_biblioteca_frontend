import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Assunto } from '../model/assunto'

@Component({
  selector: 'app-assuntos-list',
  templateUrl: './assuntos-list.component.html',
  styleUrls: ['./assuntos-list.component.css']
})
export class AssuntosListComponent implements OnInit {

  @Input() assuntos: Assunto[] = [];
  @Output() adicionar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() deletar = new EventEmitter(false);


  readonly displayedColumns = ['id', 'nome', 'cdd', 'acoes'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdicionar() {
    this.adicionar.emit(true);
  }

  onEditar(assunto: Assunto) {
    this.editar.emit(assunto);
  }

  onDeletar(assunto: Assunto) {
    this.deletar.emit(assunto);
  }
}
