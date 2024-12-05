import {Component, OnInit, ViewChild} from '@angular/core';
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
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatFormField, MatFormFieldModule,} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";


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
    HighlightOnFocusDirective,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatPaginator,
    MatTab,
    MatTabGroup,
    MatFormField,
    MatFormFieldModule,
    MatInput,
    MatFormField,
    MatButton
  ],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent implements OnInit {
  displayedColumns:string[]= ['id', 'name', 'color', 'budget','software','image','actions'];
  PhoneList:Phone[]=[];
  dataSource: MatTableDataSource<Phone> = new MatTableDataSource(this.PhoneList);
  error:string|null=null;
  selectedTabIndex: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator | null =null;
  constructor(private phoneService:PhoneService,
  private router:Router) {
  }

  ngOnInit() {
    this.phoneService.getPhones().subscribe({
      next: (data: Phone[]) => {
        this.PhoneList = data;
        this.error = null;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
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
        this.dataSource.data=updatePhone;
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
