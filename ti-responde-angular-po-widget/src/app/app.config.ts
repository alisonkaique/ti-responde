import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { PoHttpRequestModule, PoI18nModule } from '@po-ui/ng-components';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([PoHttpRequestModule,
      PoI18nModule,
    ]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi())
  ],

};