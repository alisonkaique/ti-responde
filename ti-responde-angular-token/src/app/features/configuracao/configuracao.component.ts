import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoDividerModule, PoFieldModule, PoInfoModule, PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-configuracao',
  imports: [PoPageModule, PoDividerModule, PoInfoModule, ReactiveFormsModule, CommonModule, FormsModule, PoFieldModule],
  standalone: true,
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.css'
})
export class ConfiguracaoComponent implements OnInit {

  public erpToken: string = '';
  public proBranch: string = '';
  public proCompany: string = '';

  ngOnInit(): void {
    this.loadSessionData();
  }

  private loadSessionData(): void {
    const rawToken = this.getFromStorage('ERPTOKEN');
    if (rawToken) {
      try {
        const tokenObj = JSON.parse(rawToken);
        this.erpToken = tokenObj.access_token || rawToken;
      } catch {
        this.erpToken = rawToken;
      }
    }

    const rawBranch = this.getFromStorage('ProBranch');
    this.proBranch = this.parseProtheusJsonBranch(rawBranch);

    const rawCompany = this.getFromStorage('ProCompany');
    this.proCompany = this.parseProtheusJsonCompany(rawCompany);
  }

  private parseProtheusJsonCompany(value: string | null): string {
    if (!value) return 'Não identificado';
    try {
      const obj = JSON.parse(value);
      return obj.Code ? `${obj.Code} - ${obj.CorporateName || ''}` : value;
    } catch {
      return value;
    }
  }

  private parseProtheusJsonBranch(value: string | null): string {
    if (!value) return 'Não identificado';
    try {
      const obj = JSON.parse(value);
      return obj.Code ? `${obj.Code} - ${obj.Description || ''}` : value;
    } catch {
      return value;
    }
  }

  private getFromStorage(key: string): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(key);
    }
    return null;
  }
}
