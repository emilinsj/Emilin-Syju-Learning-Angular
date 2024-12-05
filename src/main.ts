import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {PhoneListComponent} from "./app/phone-list/phone-list.component";
import {PhoneListItemComponent} from "./app/phone-list-item/phone-list-item.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes:Routes=[
  {path:'phones', component:PhoneListComponent},
  {path:'phones/:serialNumber', component:PhoneListItemComponent},
  {path:'phones/:id',
    loadComponent: () =>
      import('./app/phone-list-item/phone-list-item.component').then(m => m.PhoneListItemComponent) },
  { path: 'modify-phone',
    loadComponent: () =>
      import('./app/modifylistitemcomponent/modifylistitemcomponent.component').then(m => m.ModifylistitemcomponentComponent) },
  { path: '**',
    loadComponent: () =>
      import('./app/pagenotfoundcomponent/pagenotfoundcomponent.component').then(m => m.PagenotfoundcomponentComponent) },

];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000})), provideAnimationsAsync(),
  ],
}).catch((err)=>console.error(err));
