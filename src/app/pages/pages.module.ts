import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FormularioSimpleComponent } from './temario-diez/formulario-simple/formulario-simple.component';
import { FormularioReactivoComponent } from './temario-diez/formulario-reactivo/formulario-reactivo.component';
import { ProductsComponent } from './material/products/products.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
        PagesComponent,
        FormularioSimpleComponent,
        FormularioReactivoComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule
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