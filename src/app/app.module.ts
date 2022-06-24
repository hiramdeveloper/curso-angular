import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { AppRoutingModule } from './app-routing.module';
import { MascotasComponent } from './pages/mascotas/mascotas.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    PersonaComponent,
    MascotasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
