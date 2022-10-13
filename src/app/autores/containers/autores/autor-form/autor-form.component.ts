import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Autor } from '../../../model/autor';
import { AutoresService } from '../../../services/autores.service';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.css']
})
export class AutorFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    nome: ['', Validators.required],
    codigoCutter: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    dataFalecimento: [''],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: AutoresService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    // this.form
   }

  ngOnInit(): void {
    const autor: Autor = this.route.snapshot.data["autor"];
    if(autor.id != undefined){
    this.form.setValue({
      id: autor.id,
      nome: autor.nome,
      codigoCutter: autor.codigoCutter,
      dataNascimento: autor.dataNascimento!=null ? new Date(autor.dataNascimento).toISOString().split('T')[0] : '',
      dataFalecimento: autor.dataFalecimento!=null ? new Date(autor.dataFalecimento).toISOString().split('T')[0] : '',
    });
  }
  }

  onSubmit() {
    this.service.salvar(this.form.value)
    .subscribe(result => this.onSucess(), error =>this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this._snackBar.open('Autor salvo com sucesso.','', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar autor.','', { duration: 5000 });
}
}
