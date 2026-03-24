import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/home/home').then(m => m.Home)
  },
  {
    path: 'triggers',
    loadComponent: () => import('./shared/components/triggers/triggers').then(m => m.Triggers)
  }
];
