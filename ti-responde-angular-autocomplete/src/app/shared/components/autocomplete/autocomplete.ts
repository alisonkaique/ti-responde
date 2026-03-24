import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoContainerModule, PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-autocomplete',
  imports: [
    PoPageModule,
    PoContainerModule,
    PoDynamicModule,
    PoFieldModule,
    FormsModule
  ],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.css',
})
export class Autocomplete {
  readonly dynamicFields: PoDynamicFormField[] = [
    {
      property: 'b1_cod',
      label: 'Código',
      gridColumns: 6
    }
  ];

  readonly maxSize: number = 10;

  dynamicValues: any = {
    b1_cod: undefined
  };

  code: string = '';

  onFieldValidation(changedValues: PoDynamicFormFieldChanged): PoDynamicFormFieldChanged {
    if (changedValues.property === 'b1_cod') {
      changedValues.value.b1_cod = changedValues.value.b1_cod.padStart(this.maxSize, '0');
    }

    return changedValues;
  }

  onChange(): void {
    this.code = this.code.padStart(this.maxSize, '0');
  }
}
