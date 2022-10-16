import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroFormComponent } from './containers/livros/livro-form/livro-form.component';
import { LivrosComponent } from './containers/livros/livros.component';
import { LivroResolver } from './guards/livro.resolver';
import { ExemplarFormComponent } from '../exemplares/containers/exemplares/exemplar-form/exemplar-form.component';
import { ExemplarResolver } from '../exemplares/guards/exemplar.resolver';

const routes: Routes = [
  { path: '', component: LivrosComponent },
  { path: 'novo', component: LivroFormComponent, resolve: { livro: LivroResolver}},
  { path: 'editar/:id', component: LivroFormComponent, resolve: { livro: LivroResolver}},
  { path: 'detalhar/:id', component: LivroFormComponent, resolve: { livro: LivroResolver}},
  { path: 'adicionar-exemplar', component: ExemplarFormComponent, resolve: { livro: ExemplarResolver}},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
