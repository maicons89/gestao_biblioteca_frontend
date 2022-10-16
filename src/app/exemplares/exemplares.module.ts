import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ExemplaresRoutingModule } from './exemplares-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ExemplaresRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AssuntosModule { }
