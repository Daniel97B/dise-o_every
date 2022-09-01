import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { LogueoRoutingModule } from './logueo-routing.module';
import { LogueoComponent } from './logueo.component';


@NgModule({
  declarations: [
    LogueoComponent
  ],
  imports: [
    CommonModule,
    LogueoRoutingModule,
    MaterialModule
  ]
})
export class LogueoModule { }
