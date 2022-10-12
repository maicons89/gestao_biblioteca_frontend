import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditoraFormComponent } from './containers/editoras/editora-form/editora-form.component';
import { EditorasComponent } from './containers/editoras/editoras.component';
import { EditoraResolver } from './guards/editora.resolver';

const routes: Routes = [
  { path: '', component: EditorasComponent },
  { path: 'novo', component: EditoraFormComponent, resolve: { editora: EditoraResolver}},
  { path: 'editar/:id', component: EditoraFormComponent, resolve: { editora: EditoraResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorasRoutingModule { }
