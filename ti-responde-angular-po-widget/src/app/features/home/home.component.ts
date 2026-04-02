import { Component } from '@angular/core';
import { PoImageModule, PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  imports: [
    PoPageModule,
    PoImageModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  srcImage: string = 'file.jpeg';
  srcImagemTer: string = 'terminal.jpg';

}
