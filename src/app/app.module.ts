import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './compartir/components/headers/headers.component';
import { FooterComponent } from './compartir/components/footer/footer.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContenidoModule } from './compartir/components/contenido/contenido.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ContenidoModule,                   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
