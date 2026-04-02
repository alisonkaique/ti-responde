import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import {
  PoImageModule,
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home', icon: 'po-icon po-icon-home' },
    { label: 'Widget', link: '/widget', icon: 'po-icon po-icon-device-desktop' },
  ];


}
