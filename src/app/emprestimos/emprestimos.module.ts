import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EmprestimosListComponent } from './components/emprestimos-list.component';
import { EmprestimoFormComponent } from './containers/emprestimos/emprestimo-form/emprestimo-form.component';
import { EmprestimosComponent } from './containers/emprestimos/emprestimos.component';
import { EmprestimosRoutingModule } from './emprestimos-routing.module';



@NgModule({
  declarations: [
    EmprestimosComponent,
    EmprestimoFormComponent,
    EmprestimosListComponent
  ],
  imports: [
    CommonModule,
    EmprestimosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class EmprestimosModule { }
