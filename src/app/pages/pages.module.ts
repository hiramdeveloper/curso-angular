import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { DirectivasComponent } from './directivas/directivas.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { PersonaComponent } from './persona/persona.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { UsersComponent } from './users/users.component';
import { SincronoComponent } from './temario-siete/sincrono/sincrono.component';
import { AsincronoComponent } from './temario-siete/asincrono/asincrono.component';
import { PromesasComponent } from './temario-siete/promesas/promesas.component';
import { RxjsComponent } from './temario-siete/rxjs/rxjs.component';
import { AccesibilidadComponent } from './temario-ocho/accesibilidad/accesibilidad.component';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [
        DirectivasComponent,
        MascotasComponent,
        PersonaComponent,
        TypescriptComponent,
        UsersComponent,
        SincronoComponent,
        AsincronoComponent,
        PromesasComponent,
        RxjsComponent,
        AccesibilidadComponent,
        PagesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule
    ],
    exports: [
        UsersComponent, 
        SincronoComponent,
        AsincronoComponent,
        PromesasComponent,
        RxjsComponent,
        AccesibilidadComponent
    ]
})
export class PagesModule { }