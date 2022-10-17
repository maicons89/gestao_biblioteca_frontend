import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmprestimoFormComponent } from './containers/emprestimos/emprestimo-form/emprestimo-form.component';
import { EmprestimosComponent } from './containers/emprestimos/emprestimos.component';
import { EmprestimoResolver } from './guards/emprestimos.resolver';

const routes: Routes = [
  { path: '', component: EmprestimosComponent },
  { path: 'novo', component: EmprestimoFormComponent, resolve: { emprestimo: EmprestimoResolver}},
  { path: 'detalhar/:id', component: EmprestimoFormComponent, resolve: { emprestimo: EmprestimoResolver}},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimosRoutingModule { }
