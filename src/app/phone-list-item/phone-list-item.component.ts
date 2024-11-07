import {Component, OnInit} from '@angular/core';
import {Phone} from "../models/phone";
import {NgIf, NgOptimizedImage} from "@angular/common";
import { RouterLink} from "@angular/router";

@Component({
  selector: 'app-phone-list-item',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    NgOptimizedImage
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
