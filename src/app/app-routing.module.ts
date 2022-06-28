import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonaComponent } from '../app/pages/persona/persona.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';

const routes: Routes = [
    { path: 'persona/:id', component: PersonaComponent },
    { path: 'mascotas', component: MascotasComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}