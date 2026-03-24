import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    RouterModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  readonly menus: PoMenuItem[] = [
    { label: 'Home', icon: 'an an-grid-nine', link: '/' },
    { label: 'Tabela Editável', icon: 'an an-house', link: '/editable-table' }
  ];
}
