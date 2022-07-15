import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages/pages.routing.module';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
        PagesRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}