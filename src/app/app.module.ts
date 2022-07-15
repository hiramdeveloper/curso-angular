import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaisesPipe } from './pipes/paises.pipe';
import { DirectivesModule } from './directives/directives.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    PaisesPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DirectivesModule,
    PagesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
