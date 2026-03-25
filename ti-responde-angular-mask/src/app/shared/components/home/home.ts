import { PoImageModule, PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [
    PoPageModule,
    PoImageModule,
    PoWidgetModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly logoSrc: string = '/assets/img/logo.png';

}
