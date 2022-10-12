import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssuntoFormComponent } from './containers/assuntos/assunto-form/assunto-form.component';
import { AssuntosComponent } from './containers/assuntos/assuntos.component';
import { AssuntoResolver } from './guards/assunto.resolver';

const routes: Routes = [
  { path: '', component: AssuntosComponent },
  { path: 'novo', component: AssuntoFormComponent, resolve: { assunto: AssuntoResolver}},
  { path: 'editar/:id', component: AssuntoFormComponent, resolve: { assunto: AssuntoResolver}},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssuntosRoutingModule { }
