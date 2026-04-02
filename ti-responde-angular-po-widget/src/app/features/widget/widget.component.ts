import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PoButtonModule,
  PoInfoModule,
  PoModalAction,
  PoModalModule,
  PoWidgetModule,
  PoPageModule,
  PoModalComponent,
  PoNotificationService,
  PoSelectOption,
  PoFieldModule
} from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [
    CommonModule,
    PoWidgetModule,
    PoButtonModule,
    PoModalModule,
    PoInfoModule,
    PoPageModule,
    PoFieldModule,
    FormsModule
  ],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {

  @ViewChild('modalHelp', { static: true }) modalHelp!: PoModalComponent;

  private notification = inject(PoNotificationService);

  // Estados de loading para os botões dos widgets
  public isSyncing: boolean = false;
  public isTesting: boolean = false;

  // Informações do Sistema
  public readonly systemInfo = {
    developer: 'Sprint Fire Innovation',
    version: '2.1.0',
    buildDate: '01/04/2026 10:30',
    supportEmail: 'suporte@empresa.com'
  };

  // Ação para o botão do modal
  public readonly closeAction: PoModalAction = {
    action: () => this.modalHelp.close(),
    label: 'Entendido'
  };

  public ambienteSelecionado: string = 'prod';

  public readonly opcoesAmbiente: PoSelectOption[] = [
    { label: 'Produção', value: 'prod' },
    { label: 'Homologação', value: 'hml' },
    { label: 'Desenvolvimento', value: 'dev' }
  ];

  myActions = [
    { label: 'Ajuda', icon: 'po-icon po-icon-help', action: this.openHelp.bind(this)  },
  ];

  // Métodos disparados pelos botões dos widgets
  public sincronizar(): void {
    this.isSyncing = true;
    setTimeout(() => {
      this.isSyncing = false;
      this.notification.success('Sincronizado com sucesso.');
    }, 2000);

  }

  public testarApi(): void {
    this.isTesting = true;
    console.log('Testando ambiente:', this.ambienteSelecionado);

    setTimeout(() => {
      this.isTesting = false;
      this.notification.success('Testado com sucesso.');
    }, 1500);
  }


  openHelp(): void {
    this.modalHelp.open();
  }

}