import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/home/home').then(m => m.Home)
  },
  {
    path: 'lookup',
    loadComponent: () => import('./shared/components/lookup/lookup').then(m => m.Lookup)
  }
];
