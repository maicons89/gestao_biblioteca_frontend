import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorasComponent } from './editoras/editoras.component';
import { EditoraFormComponent } from './editora-form/editora-form.component';

const routes: Routes = [
  { path: '', component: EditorasComponent },
  { path: 'novo', component: EditoraFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorasRoutingModule { }
