import { Component } from '@angular/core';
import {Phone} from "../models/phone";
import {PhoneListItemComponent} from "../phone-list-item/phone-list-item.component";

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [
    PhoneListItemComponent
  ],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {
  display:string[]=["serialNumber","brand","name","color","software"];
  PhoneList: Phone[]=[
    { serialNumber:1,brand:"Apple",name:"Iphone 15",color:"light Blue",software:"ios"},
    { serialNumber:2,brand:"Samsung",name:"Samsung s23",color:"Black",software:"Android"},
    { serialNumber:1,brand:"Huawei",name:"Pura 70",color:"Pink",software:"Android"},
    { serialNumber:1,brand:"Lenovo",name:"K14 Plus",color:"Grey",software:"Android"},
    { serialNumber:1,brand:"Microsoft",name:"Lumia 640 XL",color:"White",software:"Android"},
    { serialNumber:1,brand:"Apple",name:"Iphone SE",color:"Red",software:"ios"}
  ];

}
