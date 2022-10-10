import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EditorasRoutingModule } from './editoras-routing.module';
import { EditorasComponent } from './editoras/editoras.component';
import { EditoraFormComponent } from './editora-form/editora-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditorasComponent,
    EditoraFormComponent
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
