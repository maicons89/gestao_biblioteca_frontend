import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Editora } from '../../../model/editora';
import { EditorasService } from '../../../services/editoras.service';

@Component({
  selector: 'app-editora-form',
  templateUrl: './editora-form.component.html',
  styleUrls: ['./editora-form.component.css']
})
export class EditoraFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    nome: ['', Validators.required],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: EditorasService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    // this.form
   }

  ngOnInit(): void {
    const editora: Editora = this.route.snapshot.data["editora"];
    if(editora.id != undefined){
    this.form.setValue({
      id: editora.id,
      nome: editora.nome
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
    this._snackBar.open('Editora salva com sucesso.','', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar editora.','', { duration: 5000 });
}
}
