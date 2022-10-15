import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Assunto } from '../../../model/assunto';
import { AssuntosService } from '../../../services/assuntos.service';

@Component({
  selector: 'app-assunto-form',
  templateUrl: './assunto-form.component.html',
  styleUrls: ['./assunto-form.component.css']
})
export class AssuntoFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    nome: ['', Validators.required],
    cdd: ['', Validators.required],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: AssuntosService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    const assunto: Assunto = this.route.snapshot.data["assunto"];
    if(assunto.id != undefined){
    this.form.setValue({
      id: assunto.id,
      nome: assunto.nome,
      cdd: assunto.cdd
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
    this._snackBar.open('Assunto salvo com sucesso.','', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar assunto.','', { duration: 5000 });
}
}
