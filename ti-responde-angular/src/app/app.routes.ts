import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/home/home').then(m => m.Home)
  },
  {
    path: 'editable-table',
    loadComponent: () => import('./shared/components/editable-table/editable-table').then(m => m.EditableTable)
  },
  {
    path: 'triggers',
    loadComponent: () => import('./shared/components/triggers/triggers').then(m => m.Triggers)
  },
  {
    path: 'lookup',
    loadComponent: () => import('./shared/components/lookup/lookup').then(m => m.Lookup)
  }
];
