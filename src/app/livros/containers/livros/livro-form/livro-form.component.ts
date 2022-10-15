import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Livro } from '../../../model/livro';
import { LivrosService } from '../../../services/livros.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  @Input() readOnly = this.route.snapshot.queryParamMap.get("readOnly");

  form = this.formBuilder.group({
    id: [''],
    isbn: ['', Validators.required],
    tituloPrincipal: ['', Validators.required],
    numeroEdicao: ['', Validators.required],
    descricaoFisica: ['', Validators.required],
    qtdDisponivelEmprestimo: ['', Validators.required],
    descricao: ['', Validators.required],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: LivrosService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    const livro: Livro = this.route.snapshot.data["livro"];
    if(livro.id != undefined){
    this.form.setValue({
      id: livro.id,
      isbn: livro.isbn,
      tituloPrincipal: livro.tituloPrincipal,
      numeroEdicao: livro.numeroEdicao,
      descricaoFisica: livro.descricaoFisica,
      qtdDisponivelEmprestimo: livro.qtdDisponivelEmprestimo,
      descricao: livro.descricao
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
    this._snackBar.open('Livro salvo com sucesso.','', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar livro.','', { duration: 5000 });
}
}
