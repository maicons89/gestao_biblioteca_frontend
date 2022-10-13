import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutorFormComponent } from './containers/autores/autor-form/autor-form.component';
import { AutoresComponent } from './containers/autores/autores.component';
import { AutorResolver } from './guards/autor.resolver';

const routes: Routes = [
  { path: '', component: AutoresComponent },
  { path: 'novo', component: AutorFormComponent, resolve: { autor: AutorResolver}},
  { path: 'editar/:id', component: AutorFormComponent, resolve: { autor: AutorResolver}},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
