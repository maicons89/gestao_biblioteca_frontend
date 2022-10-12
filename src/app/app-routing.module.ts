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
      loadChildren: () => import('./editoras/editoras.module').then(m => m.EditorasModule)
    },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
