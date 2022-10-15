import { Idioma } from './../../../../idiomas/model/idioma';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Livro } from '../../../model/livro';
import { LivrosService } from '../../../services/livros.service';
import { AssuntosService } from '../../../../assuntos/services/assuntos.service';
import { Assunto } from '../../../../assuntos/model/assunto';
import { IdiomasService } from '../../../../idiomas/services/idiomas.service';
import { EditorasService } from '../../../../editoras/services/editoras.service';
import { AutoresService } from '../../../../autores/services/autores.service';
import { Editora } from '../../../../editoras/model/editora';
import { Autor } from '../../../../autores/model/autor';

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
    qtdDisponivelEmprestimo: ['', Validators.required],
    descricao: ['', Validators.required],
    idIdioma: [''],
    idAutor: [''],
    idEditora: [''],
    idAssunto: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: LivrosService,
    private assuntosService: AssuntosService,
    private idiomasService: IdiomasService,
    private editorasService: EditorasService,
    private autoresServices: AutoresService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
   }

   assuntos: Assunto[] = [];
   nomesAssuntos: string[] = [];
   idiomas: Idioma[] = [];
   nomesIdiomas: string[] = [];
   editoras: Editora[] = [];
   nomesEditoras: string[] = [];
   autores: Autor[] = [];
   nomesAutores: string[] = [];



  ngOnInit(): void {
    this.assuntosService.listarTodos().subscribe(
      assuntos => {
        this.assuntos = assuntos;
        assuntos.forEach(assunto => this.nomesAssuntos.push(assunto.id + " - " + assunto.nome))
      }
    );

    this.idiomasService.listarTodos().subscribe(
      idiomas => {
        this.idiomas = idiomas;
        idiomas.forEach(idioma => this.nomesIdiomas.push(idioma.id + " - " + idioma.idioma))
      }
    );

    this.editorasService.listarTodos().subscribe(
      editoras => {
        this.editoras = editoras;
        editoras.forEach(editora => this.nomesEditoras.push(editora.id + " - " + editora.nome))
      }
    );

    this.autoresServices.listarTodos().subscribe(
      editoras => {
        this.autores = editoras;
        this.autores.forEach(autor => this.nomesAutores.push(autor.id + " - " + autor.nome))
      }
    );

    const livro: Livro = this.route.snapshot.data["livro"];
    if(livro.id != undefined){
    if(this.readOnly){
      this.form.controls['tituloPrincipal'].disable();
      this.form.controls['isbn'].disable();
      this.form.controls['numeroEdicao'].disable();
      this.form.controls['qtdDisponivelEmprestimo'].disable();
      this.form.controls['descricao'].disable();
      this.form.controls['idAssunto'].disable();
      this.form.controls['idEditora'].disable();
      this.form.controls['idAutor'].disable();
      this.form.controls['idIdioma'].disable();
    }
    this.form.setValue({
      id: livro.id,
      isbn: livro.isbn,
      tituloPrincipal: livro.tituloPrincipal,
      numeroEdicao: livro.numeroEdicao,
      qtdDisponivelEmprestimo: livro.qtdDisponivelEmprestimo,
      descricao: livro.descricao,
      idIdioma: `${livro.idioma.id + " - " + livro.idioma.idioma}`,
      idAutor: `${livro.autor.id + " - " + livro.autor.nome}`,
      idEditora: `${livro.editora.id + " - " + livro.editora.nome}`,
      idAssunto: `${livro.assunto.id + " - " + livro.assunto.nome}`
    });
  }
  }


  onSubmit() {
    this.form.value.idAssunto =  this.form.value.idAssunto?.split("-")[0]
    this.form.value.idIdioma =  this.form.value.idIdioma?.split("-")[0]
    this.form.value.idAutor =  this.form.value.idAutor?.split("-")[0]
    this.form.value.idEditora =  this.form.value.idEditora?.split("-")[0]
    this.service.salvar(this.form.value).subscribe(result => this.onSucess(), error =>this.onError());
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
