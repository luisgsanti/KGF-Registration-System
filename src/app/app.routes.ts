import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    //modules
    { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

    //full
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
