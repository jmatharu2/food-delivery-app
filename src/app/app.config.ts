import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptorsFromDi} from '@angular/common/http';
import { FoodCatalogueComponent } from './food-catalogue/components/food-catalogue.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
              provideClientHydration(),
              provideHttpClient(withFetch(),withInterceptorsFromDi())
            ]
};


