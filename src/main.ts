import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {PhoneListComponent} from "./app/phone-list/phone-list.component";
import {PhoneListItemComponent} from "./app/phone-list-item/phone-list-item.component";
import {PagenotfoundcomponentComponent} from "./app/pagenotfoundcomponent/pagenotfoundcomponent.component";
import {ModifylistitemcomponentComponent} from "./app/modifylistitemcomponent/modifylistitemcomponent.component";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";

const routes:Routes=[
  {path:'phones', component:PhoneListComponent},
  {path:'phones/:serialNumber', component:PhoneListItemComponent},
  {path:'modify-phone', component: ModifylistitemcomponentComponent},
  {path: '**', component:PagenotfoundcomponentComponent}

];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000}))
  ],
}).catch((err)=>console.error(err));
