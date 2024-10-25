import {Component, Input} from '@angular/core';
import {Phone} from "../models/phone";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

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
export class PhoneListItemComponent {
  @Input() phone?: Phone;

}
