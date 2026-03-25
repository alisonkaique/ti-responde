import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/home/home').then(m => m.Home)
  },
  {
    path: 'masks',
    loadComponent: () => import('./shared/components/masks/masks').then(m => m.Masks)
  }
];
