import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Usuario } from '../../../model/usuario';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
 @Input() readOnly = this.route.snapshot.queryParamMap.get("readOnly");

 form = this.formBuilder.group({
    id: [''],
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', Validators.required],
    logradouro: ['', Validators.required],
    numero: ['', Validators.required],
    complemento: [''],
    cep: ['', Validators.required],
    bairro: ['', Validators.required],
  });



  constructor(private formBuilder: NonNullableFormBuilder,
    private service: UsuariosService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    const usuario: Usuario = this.route.snapshot.data["usuario"];
    if(usuario.id != undefined){
    this.form.setValue({
      id: usuario.id,
      nome: usuario.nome,
      cpf: usuario.cpf,
      telefone: usuario.telefone,
      email: usuario.email,
      logradouro: usuario.logradouro,
      numero: usuario.numero,
      complemento: usuario.complemento,
      cep: usuario.cep,
      bairro: usuario.bairro
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
    this._snackBar.open('Usuario salvo com sucesso.','', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar usuario.','', { duration: 5000 });
}
}
