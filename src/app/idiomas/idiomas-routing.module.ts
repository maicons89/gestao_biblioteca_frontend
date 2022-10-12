import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdiomaFormComponent } from './containers/idiomas/idioma-form/idioma-form.component';
import { IdiomasComponent } from './containers/idiomas/idiomas.component';
import { IdiomaResolver } from './guards/idioma.resolver';

const routes: Routes = [
  { path: '', component: IdiomasComponent },
  { path: 'novo', component: IdiomaFormComponent, resolve: { idioma: IdiomaResolver}},
  { path: 'editar/:id', component: IdiomaFormComponent, resolve: { idioma: IdiomaResolver}},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdiomasRoutingModule { }
