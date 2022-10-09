import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorasComponent } from './editoras/editoras.component';

const routes: Routes = [
  { path: '', component: EditorasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorasRoutingModule { }
