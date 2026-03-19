import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicModule, PoLoadingModule, PoNotificationService, PoPageModule, PoSelectOption } from '@po-ui/ng-components';
import { Utils } from './../../services/utils';

@Component({
  selector: 'app-triggers',
  imports: [
    CommonModule,
    PoPageModule,
    PoDynamicModule,
    PoLoadingModule
  ],
  templateUrl: './triggers.html',
  styleUrl: './triggers.css',
})
export class Triggers implements OnInit {
  readonly typeOptions: PoSelectOption[] = [
    { value: "AI", label: "AI - ATIVO IMOBILIZADO" },
    { value: "BN", label: "BN - BENEFICIAMENTO" },
    { value: "EM", label: "EM - EMBALAGEM" },
    { value: "GE", label: "GE - GARANTIA ESTENDIDA" },
    { value: "GG", label: "GG - GASTOS GERAIS" },
    { value: "GN", label: "GN - GENERICO" },
    { value: "IA", label: "IA - INSUMO AGRICOLA" },
    { value: "II", label: "II - INSUMO INDUSTRIAIS" },
    { value: "KT", label: "KT - KIT" },
    { value: "MO", label: "MO - MAO DE OBRA" },
    { value: "MP", label: "MP - MATERIA PRIMA" },
    { value: "MM", label: "MM - MATERIAIS MANFRO" },
    { value: "MC", label: "MC - MATERIAL DE CONSUMO" },
    { value: "ME", label: "ME - MERCADORIA" },
    { value: "OI", label: "OI - OUTROS INSUMOS" },
    { value: "PA", label: "PA - PRODUTO ACABADO" },
    { value: "PP", label: "PP - PRODUTO EM PROCESSO" },
    { value: "PI", label: "PI - PRODUTO INTERMEDIARIO" },
    { value: "PV", label: "PV - PRODUTO VEICULO" },
    { value: "IN", label: "IN - PRODUTOS INDUSTRIAIS" },
    { value: "SL", label: "SL - SELO DE CONTROLE" },
    { value: "SM", label: "SM - SEMENTES" },
    { value: "SV", label: "SV - SERVIÇO" },
    { value: "SP", label: "SP - SUBPRODUTO" },
  ];

  readonly dynamicFields: PoDynamicFormField[] = [
    {
      property: 'b1_cod',
      label: 'Código',
      required: true,
      showRequired: true
    },
    {
      property: 'b1_desc',
      label: 'Descrição',
      disabled: true,
      gridColumns: 6
    },
    {
      property: 'b1_tipo',
      label: 'Tipo',
      disabled: true,
      options: this.typeOptions
    }
  ];

  isLoading: boolean = false;
  dynamicValues: any = {};

  constructor (
    private utilsService: Utils,
    private notificationService: PoNotificationService
  ) { }

  ngOnInit(): void {
    this.dynamicValues = {
      b1_cod: undefined,
      b1_desc: undefined,
      b1_tipo: undefined
    };
  }

  onFieldValidation(changedValues: PoDynamicFormFieldChanged): PoDynamicFormFieldChanged {
    if (changedValues.property === 'b1_cod') {
      changedValues.value.b1_desc = '';
      changedValues.value.b1_tipo = '';

      this.isLoading = true;

      this.utilsService.getProductInfo(changedValues.value.b1_cod).subscribe({
        next: (response) => {
          if (response.items.length > 0) {
            changedValues.value.b1_desc = response.items[0].b1_cod;
            changedValues.value.b1_tipo = response.items[0].b1_tipo;
          } else {
            changedValues.value.b1_desc = '';
            changedValues.value.b1_tipo = '';

            this.notificationService.error({
              message: `Não foi encontrado produto com o código [${changedValues.value.b1_cod}]`
            });

            changedValues.value.b1_cod = '';
          }

          this.isLoading = false;
        },
        error: (e) => {
          this.notificationService.error({
            message: 'Erro ao buscar informações, favor verificar o log de erros'
          })

          this.isLoading = false;
        }
      })
    }

    return changedValues;
  }
}
