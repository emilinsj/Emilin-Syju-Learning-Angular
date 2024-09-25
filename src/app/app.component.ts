import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Phone} from "./models/phone";
import {NgIf} from "@angular/common";
import {PhoneListComponent} from "./phone-list/phone-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, PhoneListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Emilin Phone collection';
  PhoneList: Phone[]=[
    { serialNumber:1,brand:"Apple",name:"Iphone 15",color:"light Blue",software:"ios"},
    { serialNumber:2,brand:"Samsung",name:"Samsung s23",color:"Black",software:"Android"},
    { serialNumber:1,brand:"Huawei",name:"Pura 70",color:"Pink",software:"Android"},
    { serialNumber:1,brand:"Lenovo",name:"K14 Plus",color:"Grey",software:"Android"},
    { serialNumber:1,brand:"Microsoft",name:"Lumia 640 XL",color:"White",software:"Android"},
    { serialNumber:1,brand:"Apple",name:"Iphone SE",color:"Red",software:"ios"},

  ]


}
