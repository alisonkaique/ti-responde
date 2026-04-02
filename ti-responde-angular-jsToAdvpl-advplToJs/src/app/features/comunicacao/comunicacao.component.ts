import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PoButtonModule,
  PoInfoModule,
  PoLoadingModule,
  PoNotificationService,
  PoPageModule,
  PoWidgetModule
} from '@po-ui/ng-components';
import { ProAppConfigService, ProJsToAdvpl, ProJsToAdvplService, ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-comunicacao',
  standalone: true,
  imports: [
    CommonModule,
    PoButtonModule,
    PoLoadingModule,
    PoPageModule,
    PoWidgetModule,
    PoInfoModule,
  ],
  templateUrl: './comunicacao.component.html',
  styleUrl: './comunicacao.component.css'
})
export class ComunicacaoComponent {

  private proJsToAdvplService = inject(ProJsToAdvplService);

  receberProtheus(): void {
    this.proJsToAdvplService.jsToAdvpl('receberProtheus', '');
  }

  enviarProtheus(): void {
    this.proJsToAdvplService.jsToAdvpl('mensagemJavascript', 'Comando Javascript');
  }

}