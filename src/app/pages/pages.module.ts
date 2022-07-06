import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivasComponent } from './directivas/directivas.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { PersonaComponent } from './persona/persona.component';
import { TypescriptComponent } from './typescript/typescript.component';

@NgModule({
    declarations: [
        DirectivasComponent,
        MascotasComponent,
        PersonaComponent,
        TypescriptComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [DirectivasComponent]
})
export class PagesModule { }