import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Phone} from "../models/phone";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(): {phones: Phone[]} {
    const phones:Phone[]=[
      { serialNumber:1,brand:"Apple",name:"Iphone 15",color:"light Blue",software:"ios",budget: 700,imgPath:'/iphone15.jpg'},
      { serialNumber:2,brand:"Samsung",name:"Samsung s23",color:"Black",software:"Android",budget: 900,imgPath:'/s23.jpg'},
      { serialNumber:3,brand:"Huawei",name:"Pura 70",color:"Pink",software:"Android",budget: 600,imgPath:'/pura70.jpg'},
      { serialNumber:4,brand:"Lenovo",name:"K14 Plus",color:"Grey",software:"Android",budget:700,imgPath:'/lenova.jpg'},
      { serialNumber:5,brand:"Microsoft",name:"Lumia 640 XL",color:"White",software:"Android",budget: 2000,imgPath:'/micro.jpg'},
      { serialNumber:6,brand:"Apple",name:"Iphone SE",color:"Red",software:"ios",budget: 1000, imgPath:'/se.jpg'}
    ];
    return {phones};
  }

}
