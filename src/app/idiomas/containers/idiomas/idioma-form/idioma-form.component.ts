import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Idioma } from '../../../model/idioma';
import { IdiomasService } from '../../../services/idiomas.service';

@Component({
  selector: 'app-idioma-form',
  templateUrl: './idioma-form.component.html',
  styleUrls: ['./idioma-form.component.css']
})
export class IdiomaFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    idioma: ['', Validators.required],
    sigla: ['', Validators.required],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: IdiomasService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    // this.form
   }

  ngOnInit(): void {
    const idioma: Idioma = this.route.snapshot.data["idioma"];
    if(idioma.id != undefined){
    this.form.setValue({
      id: idioma.id,
      idioma: idioma.idioma,
      sigla: idioma.sigla
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
    this._snackBar.open('Idioma salvo com sucesso.','', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar idioma.','', { duration: 5000 });
}
}
