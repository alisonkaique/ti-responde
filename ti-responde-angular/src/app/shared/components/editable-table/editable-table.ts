import { CommonModule } from '@angular/common';
import { Utils } from './../../services/utils';
import { Component, OnInit } from '@angular/core';
import { PoFieldModule, PoLoadingModule, PoNotificationService, PoPageAction, PoPageModule, PoTableColumn, PoTableModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editable-table',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PoPageModule,
    PoTableModule,
    PoLoadingModule,
    PoFieldModule
  ],
  templateUrl: './editable-table.html',
  styleUrl: './editable-table.css',
})
export class EditableTable implements OnInit {
  readonly columns: PoTableColumn[] = [
    {
      property: 'bm_grupo',
      label: 'Código'
    },
    {
      property: 'bm_desc',
      label: 'Descrição',
      type: 'cellTemplate'
    }
  ];

  readonly pageActions: PoPageAction[] = [
    {
      label: 'Salvar',
      icon: 'an an-floppy-disk',
      action: this.save.bind(this)
    }
  ];

  page: number = 1;
  pageSize: number = 10;
  isLoading: boolean = false;
  items: any[] = [];
  hasNext: boolean = false;

  constructor(
    private utilsService: Utils,
    private notificationService: PoNotificationService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;

    this.utilsService.getProductGroups(this.page, this.pageSize).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.items = this.items.concat(response.items);
        this.hasNext = response.hasNext;
      },
      error: (e) => {
        this.isLoading = false;
      }
    });
  }

  showMore(): void {
    this.page ++;
    this.loadData();
  }

  save(): void {
    this.isLoading = true;

    this.utilsService.postProductGroups({ items: this.items }).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;
        this.notificationService.success({
          message: 'Registros atualizados com Sucesso!!!'
        });

        this.items = [];
        this.page = 1;
        this.loadData();
      },
      error: (e) => {
        console.log(e);
        this.isLoading = false;
      }
    })
  }
}
