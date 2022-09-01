//TODO Se realiza la importacion de todos los componentes que vamos a nececitarde de la importacion metiral
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';

//? importamos diseño de angular materia
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input"

//* Creamos un array 
const myModules = [
   MatInputModule,
   MatIconModule, 
   MatListModule, 
   MatMenuModule, 
   MatButtonModule, 
   MatSidenavModule, 
   MatToolbarModule,
   MatPaginatorModule,
   MatCardModule];

@NgModule({
   imports: [...myModules],
   exports: [...myModules],
})

export class MaterialModule { }