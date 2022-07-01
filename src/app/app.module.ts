import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { AppRoutingModule } from './app-routing.module';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { PaisesPipe } from './pipes/paises.pipe';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { NotImageDirective } from './directives/notImage/not-image.directive';
import { BackgroundColorDirective } from './directives/backgroundColor/background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    PersonaComponent,
    MascotasComponent,
    PaisesPipe,
    DirectivasComponent,
    NotImageDirective,
    BackgroundColorDirective
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
