import { Pipe, PipeTransform } from '@angular/core';
import {Phone} from "../models/phone";

@Pipe({
  name: 'product',
  standalone: true
})
export class ProductPipe implements PipeTransform {

  transform(phone: Phone): string{
    return `${phone.brand} ${phone.name}`;
  }

}
