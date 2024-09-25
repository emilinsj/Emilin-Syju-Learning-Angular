import {Component, Input} from '@angular/core';
import {Phone} from "../models/phone";

@Component({
  selector: 'app-phone-list-item',
  standalone: true,
  imports: [],
  templateUrl: './phone-list-item.component.html',
  styleUrl: './phone-list-item.component.css'
})
export class PhoneListItemComponent {
  @Input() phone?: Phone;

}
