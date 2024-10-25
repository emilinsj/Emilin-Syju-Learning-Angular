import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {PhoneListComponent} from "./app/phone-list/phone-list.component";
import {PhoneListItemComponent} from "./app/phone-list-item/phone-list-item.component";
import {PagenotfoundcomponentComponent} from "./app/pagenotfoundcomponent/pagenotfoundcomponent.component";
import {ModifylistitemcomponentComponent} from "./app/modifylistitemcomponent/modifylistitemcomponent.component";

const routes:Routes=[
  {path:'phones', component:PhoneListComponent},
  {path:'phones/:serialNumber', component:PhoneListItemComponent},
  {path:'modify-phone', component: ModifylistitemcomponentComponent},
  {path: '**', component:PagenotfoundcomponentComponent}

];

bootstrapApplication(AppComponent,{
  providers:[provideRouter(routes)]
}).catch((err) => console.error(err));
