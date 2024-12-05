import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgIf} from "@angular/common";
import {PhoneListComponent} from "./phone-list/phone-list.component";
import {Phone} from "./models/phone";
import {PhoneService} from "./services/phone.service";
import {PhoneList} from "./models/mock-phone";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, PhoneListComponent, RouterLink, RouterLinkActive, MatToolbar, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = ' Phone collection';
  newPhoneList : Phone={serialNumber:7, brand: "Apple",name:"Iphone 13",color:"violet",software:"ios", imgPath:'/13.jpg'};
  constructor(private phoneService: PhoneService) {
  }

  ngOnInit(): void {
    this.phoneService.addPhone(this.newPhoneList).subscribe( {

    });
  }
  protected readonly Phonelist=PhoneList;
}
