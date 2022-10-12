import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EditorasRoutingModule } from './editoras-routing.module';
import { EditorasComponent } from './containers/editoras/editoras.component';
import { EditoraFormComponent } from './containers/editoras/editora-form/editora-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorasListComponent } from './components/editoras-list/editoras-list.component';



@NgModule({
  declarations: [
    EditorasComponent,
    EditoraFormComponent,
    EditorasListComponent
  ],
  imports: [
    CommonModule,
    EditorasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class EditorasModule { }
