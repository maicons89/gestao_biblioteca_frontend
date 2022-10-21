import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { DevolucoesListComponent } from './components/devolucoes-list.component';
import { DevolucaoFormComponent } from './containers/devolucoes/devolucao-form/devolucao-form.component';
import { DevolucoesComponent } from './containers/devolucoes/devolucoes.component';
import { DevolucoesRoutingModule } from './devolucoes-routing.module';



@NgModule({
  declarations: [
    DevolucoesComponent,
    DevolucaoFormComponent,
    DevolucoesListComponent
  ],
  imports: [
    CommonModule,
    DevolucoesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class DevolucoesModule { }
