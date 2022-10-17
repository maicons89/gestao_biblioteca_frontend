import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Exemplar } from '../../../../exemplares/model/exemplar';
import { ExemplaresService } from '../../../../exemplares/services/exemplares.service';
import { Usuario } from '../../../../usuarios/model/usuario';
import { UsuariosService } from '../../../../usuarios/services/usuarios.service';
import { ExemplarEmprestimo } from '../../../model/exemplarEmprestimo';
import { EmprestimosService } from '../../../services/emprestimos.service';

@Component({
  selector: 'app-emprestimo-form',
  templateUrl: './emprestimo-form.component.html',
  styleUrls: ['./emprestimo-form.component.css']
})
export class EmprestimoFormComponent implements OnInit {

  @Input() readOnly = this.route.snapshot.queryParamMap.get("readOnly");
  @Input() novo = this.route.snapshot.queryParamMap.get("novo");

  dataAtual = new Date()
  dataAtualEmprestimo = this.dataAtual.getDate()
  dataAtualEmprestimoRealizado = this.dataAtual.setDate(this.dataAtualEmprestimo-1)
  data = new Date()
  date = this.data.getDate()
  dataPrevista = this.data.setDate(this.date+6)


  form = this.formBuilder.group({

    id: [''],
    dataEmprestimo: [this.novo? this.dataAtual.toISOString().split('T')[0] : ''],
    dataDevolucaoPrevista: [this.novo? this.data.toISOString().split('T')[0] : ''],
    dataDevolucao: [''],
    idUsuario: [''],
    idExemplar: [''],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: EmprestimosService,
    private usuariosService: UsuariosService,
    private exemplaresService: ExemplaresService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
   }

   usuarios: Usuario[] = [];
   nomesUsuarios: string[] = [];
   exemplares: Exemplar[] = [];
   nomesExemplares: string[] = [];


  ngOnInit(): void {
    console.log(this.data)

    this.usuariosService.listarTodos().subscribe(
      usuarios => {
        this.usuarios = usuarios;
        usuarios.forEach(usuario => this.nomesUsuarios.push(usuario.id + " - " + usuario.nome + ' - ' + usuario.cpf))
      }
    );

    this.exemplaresService.listarTodos().subscribe(
      exemplares => {
        this.exemplares = exemplares;
        exemplares.forEach(exemplar => this.nomesExemplares.push(exemplar.id + ' - ' + exemplar.codigoExemplar + " - " + exemplar.livro.tituloPrincipal))
      }
    );

    const exemplarEmprestimo: ExemplarEmprestimo = this.route.snapshot.data["emprestimo"];

    if(exemplarEmprestimo.id != undefined){
    if(this.readOnly){
      this.form.controls['dataEmprestimo'].disable();
      this.form.controls['dataDevolucaoPrevista'].disable();
      this.form.controls['dataDevolucao'].disable();
      this.form.controls['idUsuario'].disable();
      this.form.controls['idExemplar'].disable();
    }
    console.log(exemplarEmprestimo.usuario)
    this.form.setValue({
      id: exemplarEmprestimo.id,
      dataEmprestimo: exemplarEmprestimo.dataEmprestimo!=null?  new Date(exemplarEmprestimo.dataEmprestimo).toISOString().split('T')[0] : '',
      dataDevolucaoPrevista: exemplarEmprestimo.dataDevolucaoPrevista!=null?   new Date(exemplarEmprestimo.dataDevolucaoPrevista).toISOString().split('T')[0] : '',
      dataDevolucao: exemplarEmprestimo.dataDevolucao!=null? new Date(exemplarEmprestimo.dataDevolucao).toISOString().split('T')[0] : '',
      idUsuario: `${exemplarEmprestimo.usuario.id + " - " + exemplarEmprestimo.usuario.nome + ' - ' + exemplarEmprestimo.usuario.cpf}`,
      idExemplar: `${exemplarEmprestimo.exemplar.id + " - " +  exemplarEmprestimo.exemplar.codigoExemplar +' - ' + exemplarEmprestimo.exemplar.livro.tituloPrincipal}`,
    });
  }
  }


  onSubmit() {
    this.form.value.idUsuario =  this.form.value.idUsuario?.split("-")[0]
    this.form.value.idExemplar =  this.form.value.idExemplar?.split("-")[0]
    console.log(this.form.value)
    this.service.salvar(this.form.value).subscribe(result => this.onSucess(), error =>this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this._snackBar.open('Empréstimo realizado com sucesso.','', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao realizar empréstimo.','', { duration: 5000 });
}
}
