import {Component, OnInit} from '@angular/core';
import {PhoneListItemComponent} from "../phone-list-item/phone-list-item.component";
import {
  CurrencyPipe,
  LowerCasePipe,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";
import {Phone} from "../models/phone";
import {PhoneService} from "../services/phone.service";
import {Router, RouterLink} from "@angular/router";
import {ProductPipe} from "../pipes/product.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";


@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [
    PhoneListItemComponent,
    NgForOf,
    RouterLink,
    NgIf,
    NgOptimizedImage,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    PercentPipe,
    CurrencyPipe,
    ProductPipe,
    HoverHighlightDirective,
    HighlightOnFocusDirective
  ],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent implements OnInit {
  PhoneList:Phone[]=[];
  error:string|null=null;
  constructor(private phoneService:PhoneService,
  private router:Router) {
  }

  ngOnInit() {
    this.phoneService.getPhones().subscribe({
      next: (data: Phone[]) => {
        this.PhoneList = data;
        this.error = null;
      },
      error: err => {
        this.error = 'Error fetching phone';
        console.error("Error fetching phones", err);
      },
      complete: () => console.log("Phone data fetch complete!")
    });



  }
  editPhone(serialNumber:number) {
    this.router.navigate(['/phones', serialNumber]);

  }
  deletePhone(serialNumber:number){

    this.phoneService.deletePhone(serialNumber).subscribe({
      next:(updatePhone:Phone[])=>{
        this.PhoneList=updatePhone;
        this.error=null;
      },
      error:err=>{
        this.error='Error Deleting phone';
        console.error("Error deleting phone",err);
      }
    });
  }
 /* selectedPhone?:Phone;
  selectsPhone(phone:Phone):void{
    this.selectedPhone=phone
  }

  */
  /*PhoneList: Phone[]=[
    { serialNumber:1,brand:"Apple",name:"Iphone 15",color:"light Blue",software:"ios"},
    { serialNumber:2,brand:"Samsung",name:"Samsung s23",color:"Black",software:"Android"},
    { serialNumber:3,brand:"Huawei",name:"Pura 70",color:"Pink",software:"Android"},
    { serialNumber:4,brand:"Lenovo",name:"K14 Plus",color:"Grey",software:"Android"},
    { serialNumber:5,brand:"Microsoft",name:"Lumia 640 XL",color:"White",software:"Android"},
    { serialNumber:6,brand:"Apple",name:"Iphone SE",color:"Red",software:"ios"}
  ];*/

}
