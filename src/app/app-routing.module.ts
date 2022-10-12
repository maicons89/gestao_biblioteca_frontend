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

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
