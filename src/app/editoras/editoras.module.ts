import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EditorasRoutingModule } from './editoras-routing.module';
import { EditorasComponent } from './editoras/editoras.component';



@NgModule({
  declarations: [
    EditorasComponent
  ],
  imports: [
    CommonModule,
    EditorasRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class EditorasModule { }
