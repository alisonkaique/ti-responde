import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/home/home').then(m => m.Home)
  },
  {
    path: 'autocomplete',
    loadComponent: () => import('./shared/components/autocomplete/autocomplete').then(m => m.Autocomplete)
  }
];
