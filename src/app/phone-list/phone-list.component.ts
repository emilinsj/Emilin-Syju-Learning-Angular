import {Component, OnInit} from '@angular/core';
//import {Phone} from "../models/phone";
import {PhoneListItemComponent} from "../phone-list-item/phone-list-item.component";
import {NgForOf} from "@angular/common";
import {Phone} from "../models/phone";
import {PhoneService} from "../services/phone.service";

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [
    PhoneListItemComponent,
    NgForOf
  ],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent implements OnInit {
  display:string[]=["serialNumber","brand","name","color","software"];
  PhoneList:Phone[]=[];
  constructor(private phoneService:PhoneService) {
  }

  ngOnInit() {
    this.phoneService.getPhones().subscribe({
      next: (data: Phone[]) =>this.PhoneList=data,
      error:err=>console.error("Error fetching Phones",err),
      complete:()=>console.log("Phone data fetch complete!")
                                            })
  }
  /*PhoneList: Phone[]=[
    { serialNumber:1,brand:"Apple",name:"Iphone 15",color:"light Blue",software:"ios"},
    { serialNumber:2,brand:"Samsung",name:"Samsung s23",color:"Black",software:"Android"},
    { serialNumber:3,brand:"Huawei",name:"Pura 70",color:"Pink",software:"Android"},
    { serialNumber:4,brand:"Lenovo",name:"K14 Plus",color:"Grey",software:"Android"},
    { serialNumber:5,brand:"Microsoft",name:"Lumia 640 XL",color:"White",software:"Android"},
    { serialNumber:6,brand:"Apple",name:"Iphone SE",color:"Red",software:"ios"}
  ];*/

}
