import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'editoras' },

    {
      path: 'editoras',
      loadChildren: () => import('./editoras/editoras.module').then(m => m.EditorasModule)
    },

    {
      path: 'assuntos',
      loadChildren: () => import('./assuntos/assuntos.module').then(m => m.AssuntosModule)
    },

    {
      path: 'idiomas',
      loadChildren: () => import('./idiomas/idiomas.module').then(m => m.IdiomasModule)
    },

    {
      path: 'autores',
      loadChildren: () => import('./autores/autores.module').then(m => m.AutoresModule)
    },

    {
      path: 'livros',
      loadChildren: () => import('./livros/livros.module').then(m => m.LivrosModule)
    },

    {
      path: 'usuarios',
      loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
    },

    {
      path: 'emprestimos',
      loadChildren: () => import('./emprestimos/emprestimos.module').then(m => m.EmprestimosModule)
    },

    {
      path: 'devolucoes',
      loadChildren: () => import('./devolucoes/devolucoes.module').then(m => m.DevolucoesModule)
    },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
