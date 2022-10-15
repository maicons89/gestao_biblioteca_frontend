import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './containers/usuarios/usuarios.component';
import { UsuarioFormComponent } from './containers/usuarios/usuario-form/usuario-form.component';
import { UsuariosListComponent } from './components/usuarios-list.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioFormComponent,
    UsuariosListComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class UsuariosModule { }
