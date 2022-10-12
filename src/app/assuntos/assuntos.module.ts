import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AssuntosRoutingModule } from './assuntos-routing.module';
import { AssuntosComponent } from './containers/assuntos/assuntos.component';
import { AssuntoFormComponent } from './containers/assuntos/assunto-form/assunto-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AssuntosListComponent } from './components/assuntos-list.component';



@NgModule({
  declarations: [
    AssuntosComponent,
    AssuntoFormComponent,
    AssuntosListComponent
  ],
  imports: [
    CommonModule,
    AssuntosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AssuntosModule { }
