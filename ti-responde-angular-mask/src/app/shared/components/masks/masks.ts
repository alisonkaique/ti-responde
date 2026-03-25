import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoContainerModule, PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-masks',
  imports: [
    PoPageModule,
    PoContainerModule,
    PoDynamicModule,
    PoFieldModule,
    FormsModule
  ],
  templateUrl: './masks.html',
  styleUrl: './masks.css',
})
export class Masks {
  readonly dynamicFields: PoDynamicFormField[] = [
    {
      property: 'cpf',
      label: 'CPF',
      gridColumns: 6,
      mask: '999.999.999-99',
      pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
      maskNoLengthValidation: true,
      maxLength: 11,
      minLength: 0
    },
    {
      property: 'cnpj',
      label: 'CNPJ',
      gridColumns: 6,
      mask: '99.999.999/9999-99',
      pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
      maskNoLengthValidation: true,
      maxLength: 14,
      minLength: 0
    },
    {
      property: 'mobilePhone',
      label: 'Telefone Celular',
      gridColumns: 6,
      mask: '(99) 9 9999-9999',
      pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
      maskNoLengthValidation: true,
      maxLength: 11,
      minLength: 0
    },
    {
      property: 'numberValue',
      label: 'Numérico sem Casas Decimais',
      type: 'number',
      decimalsLength: 0,
      gridColumns: 6
    },
    {
      property: 'decimalValue',
      label: 'Númerico com Casas Decimais',
      type: 'decimal',
      decimalsLength: 4,
      gridColumns: 6
    },
    {
      property: 'currencyValue',
      label: 'Valor Monetário',
      type: 'currency',
      decimalsLength: 2,
      gridColumns: 6
    }
  ];

  dynamicValues: any = {
    cpf: undefined,
    cnpj: undefined,
    mobilePhone: undefined,
    numberValue: undefined,
    decimalValue: undefined,
    currencyValue: undefined
  };

  cpf: string = '';
  cnpj: string = '';
  mobilePhone: string = '';
  numberValue: number = 0;
  decimalValue: number = 0;
  currencyValue: number = 0;
}
