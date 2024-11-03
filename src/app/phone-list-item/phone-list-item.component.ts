import {Component, OnInit} from '@angular/core';
import {Phone} from "../models/phone";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {PhoneService} from "../services/phone.service";

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
    private route:ActivatedRoute,
    private phoneService:PhoneService
  ) {
  }

  ngOnInit(): void {
    this.phoneService.getPhones().subscribe({
      next: (phones: Phone[]) => {
        this.phoneList = phones;
        this.error = null; // Clear any previous errors

        // Subscribe to paramMap changes to update the page view
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.phoneList.findIndex(phone => phone.serialNumber === id);
            this.phone = this.phoneList[this.currentIndex];
          }
        });
      },
      error: (err) => {
        this.error = 'Error fetching students';
        console.error('Error fetching students:', err);
      }
    });
  }

}
