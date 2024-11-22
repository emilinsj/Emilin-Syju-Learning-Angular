import {Component, OnInit} from '@angular/core';
import {Phone} from "../models/phone";
import {CurrencyPipe, LowerCasePipe, NgIf, NgOptimizedImage, TitleCasePipe, UpperCasePipe} from "@angular/common";
import { RouterLink} from "@angular/router";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";

@Component({
  selector: 'app-phone-list-item',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgOptimizedImage,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    HoverHighlightDirective,
    HighlightOnFocusDirective
  ],
  templateUrl: './phone-list-item.component.html',
  styleUrl: './phone-list-item.component.css'
})
export class PhoneListItemComponent implements OnInit{
  phone:Phone |undefined;
  phoneList:Phone[]=[];
  currentIndex:number=0;
  error:String|null =null;
  constructor(
    //private route:ActivatedRoute,
    //private phoneService:PhoneService
  ) {
  }

  ngOnInit(): void {

  }

}
