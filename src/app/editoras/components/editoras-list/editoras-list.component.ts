import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Editora } from '../../model/editora';

@Component({
  selector: 'app-editoras-list',
  templateUrl: './editoras-list.component.html',
  styleUrls: ['./editoras-list.component.css']
})
export class EditorasListComponent implements OnInit {

  @Input() editoras: Editora[] = [];
  @Output() adicionar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() deletar = new EventEmitter(false);


  readonly displayedColumns = ['id', 'nome', 'acoes'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdicionar() {
    this.adicionar.emit(true);
  }

  onEditar(editora: Editora) {
    this.editar.emit(editora);
  }

  onDeletar(editora: Editora) {
    this.deletar.emit(editora);
  }
}
