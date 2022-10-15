import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { UsuariosListComponent } from './components/usuarios-list.component';
import { UsuarioFormComponent } from './containers/usuarios/usuario-form/usuario-form.component';
import { UsuariosComponent } from './containers/usuarios/usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';


export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;



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
    NgxMaskModule.forRoot(),

  ]
})
export class UsuariosModule { }
