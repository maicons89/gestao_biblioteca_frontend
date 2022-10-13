import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './containers/autores/autores.component';
import { AutorFormComponent } from './containers/autores/autor-form/autor-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoresListComponent } from './components/autores-list.component';



@NgModule({
  declarations: [
    AutoresComponent,
    AutorFormComponent,
    AutoresListComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AutoresModule { }
