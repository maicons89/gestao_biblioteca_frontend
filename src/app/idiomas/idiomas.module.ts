import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { IdiomasRoutingModule } from './idiomas-routing.module';
import { IdiomasComponent } from './containers/idiomas/idiomas.component';
import { IdiomaFormComponent } from './containers/idiomas/idioma-form/idioma-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IdiomasListComponent } from './components/idiomas-list.component';



@NgModule({
  declarations: [
    IdiomasComponent,
    IdiomaFormComponent,
    IdiomasListComponent
  ],
  imports: [
    CommonModule,
    IdiomasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class IdiomasModule { }
