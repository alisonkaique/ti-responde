import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { I18N_CONFIG, PoHttpRequestModule, PoI18nModule, PoI18nConfig } from '@po-ui/ng-components';

import { routes } from './app.routes';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(withInterceptorsFromDi()),

    importProvidersFrom([
      PoHttpRequestModule,
      PoI18nModule,// ✅ ESSENCIAL PARA FUNCIONAR
      ProtheusLibCoreModule
    ]),
    { provide: 'Window', useValue: window },

    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
