import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ExemplaresService } from '../../../services/exemplares.service';

@Component({
  selector: 'app-exemplar-form',
  templateUrl: './exemplar-form.component.html',
  styleUrls: ['./exemplar-form.component.css']
})
export class ExemplarFormComponent implements OnInit {

  @Input() readOnly = this.route.snapshot.queryParamMap.get("readOnly");

  form = this.formBuilder.group({
    id: [''],
    codigoExemplar: ['', Validators.required],
    descricao: [''],
    idLivro: [''],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ExemplaresService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {

  }

  onSubmit() {
    const livroID = this.route.snapshot.queryParamMap.get("livroID");
    this.form.value.idLivro = livroID? livroID : '';
    this.service.salvar(this.form.value).subscribe(result => this.onSucess(), error =>this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this._snackBar.open('Exemplar salvo com sucesso.','', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar exemplar.','', { duration: 5000 });
}
}
