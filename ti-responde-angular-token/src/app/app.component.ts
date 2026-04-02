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
import { ProAppConfigService } from '@totvs/protheus-lib-core';

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

  private proAppConfigService = inject(ProAppConfigService);

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home', icon: 'po-icon po-icon-home' },
    { label: 'Configurações', link: '/configuracoes', icon: 'po-icon po-icon-settings' },
    { label: 'Sair', action: this.closeApp.bind(this), icon: 'po-icon po-icon-exit' },
  ];


  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert('O App não está sendo executado dentro do Protheus.');
    }
  }

}
