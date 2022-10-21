import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Exemplar } from '../../../../exemplares/model/exemplar';
import { ExemplaresService } from '../../../../exemplares/services/exemplares.service';
import { Usuario } from '../../../../usuarios/model/usuario';
import { UsuariosService } from '../../../../usuarios/services/usuarios.service';
import { ExemplarEmprestimo } from '../../../../emprestimos/model/exemplarEmprestimo';
import { DevolucoesService } from '../../../services/devolucoes.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../../shared/components/error-dialog/error-dialog.component';
import { delay } from 'rxjs/operators';
import { MultaDialogComponent } from '../../../../shared/components/multa-dialog/multa-dialog.component';

@Component({
  selector: 'app-devolucao-form',
  templateUrl: './devolucao-form.component.html',
  styleUrls: ['./devolucao-form.component.css']
})
export class DevolucaoFormComponent implements OnInit {

  @Input() readOnly = this.route.snapshot.queryParamMap.get("readOnly");
  @Input() novo = this.route.snapshot.queryParamMap.get("novo");
  @Input() devolver = this.route.snapshot.queryParamMap.get("devolver");

  dataAtual = new Date();
  dataAtualEmprestimo = this.dataAtual.getDate();
  dataAtualEmprestimoRealizado = this.dataAtual.setDate(this.dataAtualEmprestimo);
  data = new Date()
  date = this.data.getDate()
  dataPrevista = this.data.setDate(this.date+7)


  form = this.formBuilder.group({

    id: [''],
    dataEmprestimo: [this.novo? this.dataAtual.toISOString().split('T')[0] : ''],
    dataDevolucaoPrevista: [this.novo? this.data.toISOString().split('T')[0] : ''],
    dataDevolucao: [''],
    idUsuario: [''],
    idExemplar: [''],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: DevolucoesService,
    private usuariosService: UsuariosService,
    private exemplaresService: ExemplaresService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    public dialog: MatDialog,) {
   }

   usuarios: Usuario[] = [];
   nomesUsuarios: string[] = [];
   exemplares: Exemplar[] = [];
   nomesExemplares: string[] = [];
   nomesExemplaresTodos: string[] = [];


  ngOnInit(): void {
    this.usuariosService.listarTodos().subscribe(
      usuarios => {
        this.usuarios = usuarios;
        usuarios.forEach(usuario => this.nomesUsuarios.push(usuario.id + " - " + usuario.nome + ' - ' + usuario.cpf))
      }
    );

    this.exemplaresService.listarTodosComQuantidadeDisponivel().subscribe(
      exemplares => {
        this.exemplares = exemplares;
        exemplares.forEach(exemplar => this.nomesExemplares.push(exemplar.id + ' - ' + exemplar.codigoExemplar + " - " + exemplar.livro.tituloPrincipal))
      }
    );

    this.exemplaresService.listarTodos().subscribe(
      exemplares => {
        this.exemplares = exemplares;
        exemplares.forEach(exemplar => this.nomesExemplaresTodos.push(exemplar.id + ' - ' + exemplar.codigoExemplar + " - " + exemplar.livro.tituloPrincipal))
      }
    );

    const exemplarEmprestimo: ExemplarEmprestimo = this.route.snapshot.data["devolucao"];

    if(exemplarEmprestimo.id != undefined){
    if(this.readOnly){
      this.form.controls['dataEmprestimo'].disable();
      this.form.controls['dataDevolucaoPrevista'].disable();
      this.form.controls['dataDevolucao'].disable();
      this.form.controls['idUsuario'].disable();
      this.form.controls['idExemplar'].disable();
    }
    if(this.devolver){
      this.form.controls['dataEmprestimo'].disable();
      this.form.controls['dataDevolucaoPrevista'].disable();
      this.form.controls['idUsuario'].disable();
      this.form.controls['idExemplar'].disable();
    }
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
    const exemplarEmprestimo: ExemplarEmprestimo = this.route.snapshot.data["devolucao"];
    this.form.value.dataDevolucaoPrevista =  exemplarEmprestimo.dataDevolucaoPrevista
    this.form.value.dataEmprestimo =  exemplarEmprestimo.dataEmprestimo
    this.form.value.idUsuario = exemplarEmprestimo.idUsuario
    this.form.value.idExemplar =  exemplarEmprestimo.idExemplar
    if(new Date(this.form.value.dataDevolucao!!) > new Date(exemplarEmprestimo.dataDevolucaoPrevista)){
      this.dialog.open(MultaDialogComponent, {
        data: "A devolução está atrasada. Multa de R$5,00."
      }).afterClosed().subscribe(res => {
        this.service.salvar(this.form.value).subscribe(result => this.onSucess(), error =>this.onError());
      });
    }else{
      this.service.salvar(this.form.value).subscribe(result => this.onSucess(), error =>this.onError());
    }

  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this._snackBar.open('Devolução realizada com sucesso.','', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao realizar devolução.','', { duration: 5000 });
}
}
