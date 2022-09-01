import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido.component';
//? importamos el material modulos para la integracion de componentes
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  //! creamos modulo de exportacion que permitira la utilizacion de todo el codigo
  exports:[ContenidoComponent]
})
export class ContenidoModule { }
