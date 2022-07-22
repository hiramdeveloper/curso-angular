import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { AccesibilidadComponent } from './temario-ocho/accesibilidad/accesibilidad.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { TypescriptComponent } from './typescript/typescript.component';

import { 
    AuthGuardService as AuthGuard 
} from '../auth/services/auth-guard.service';
import { FormularioSimpleComponent } from './temario-diez/formulario-simple/formulario-simple.component';
import { FormularioReactivoComponent } from './temario-diez/formulario-reactivo/formulario-reactivo.component';

const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: AccesibilidadComponent },
            { path: 'mascotas', component: MascotasComponent },
            { path: 'typescript', component: TypescriptComponent },
            { path: 'formulario-simple', component: FormularioSimpleComponent },
            { path: 'formulario-reactivo', component: FormularioReactivoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }