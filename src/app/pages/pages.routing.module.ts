import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { AccesibilidadComponent } from './temario-ocho/accesibilidad/accesibilidad.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { TypescriptComponent } from './typescript/typescript.component';

import { 
    AuthGuardService as AuthGuard 
} from '../auth/services/auth-guard.service';

const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: AccesibilidadComponent },
            { path: 'mascotas', component: MascotasComponent },
            { path: 'typescript', component: TypescriptComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }