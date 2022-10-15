import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioFormComponent } from './containers/usuarios/usuario-form/usuario-form.component';
import { UsuariosComponent } from './containers/usuarios/usuarios.component';
import { UsuarioResolver } from './guards/usuario.resolver';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'novo', component: UsuarioFormComponent, resolve: { usuario: UsuarioResolver}},
  { path: 'editar/:id', component: UsuarioFormComponent, resolve: { usuario: UsuarioResolver}},
  { path: 'detalhar/:id', component: UsuarioFormComponent, resolve: { usuario: UsuarioResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
