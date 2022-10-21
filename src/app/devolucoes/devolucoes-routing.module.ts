import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevolucaoFormComponent } from './containers/devolucoes/devolucao-form/devolucao-form.component';
import { DevolucoesComponent } from './containers/devolucoes/devolucoes.component';
import { DevolucaoResolver } from './guards/devolucoes.resolver';

const routes: Routes = [
  { path: '', component: DevolucoesComponent },
  { path: 'novo', component: DevolucaoFormComponent, resolve: { devolucao: DevolucaoResolver}},
  { path: 'detalhar/:id', component: DevolucaoFormComponent, resolve: { devolucao: DevolucaoResolver}},
  { path: 'devolver/:id', component: DevolucaoFormComponent, resolve: { devolucao: DevolucaoResolver}},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevolucoesRoutingModule { }
