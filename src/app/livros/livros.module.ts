import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './containers/livros/livros.component';
import { LivroFormComponent } from './containers/livros/livro-form/livro-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LivrosListComponent } from './components/livros-list.component';



@NgModule({
  declarations: [
    LivrosComponent,
    LivroFormComponent,
    LivrosListComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class LivrosModule { }
