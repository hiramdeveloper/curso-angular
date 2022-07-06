import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaisesPipe } from './pipes/paises.pipe';
import { DirectivesModule } from './directives/directives.module';




@NgModule({
  declarations: [
    AppComponent,
    PaisesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DirectivesModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
