import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'index.html',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    }, {
        path: 'widget',
        loadComponent: () => import('../app/features/widget/widget.component').then(m => m.WidgetComponent)
    }
];
