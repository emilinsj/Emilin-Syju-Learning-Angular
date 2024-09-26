import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/*import {Phone} from "./models/phone";*/
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

}
