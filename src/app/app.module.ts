import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { DatosEstudianteComponent } from './datos-estudiante/datos-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    OperacionesComponent,
    DatosEstudianteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
