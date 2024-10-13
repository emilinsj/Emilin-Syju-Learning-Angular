import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Phone} from "../models/phone";
import {PhoneList} from "../models/mock-phone";


@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private phones:Phone[]=PhoneList;
  constructor() { }
  getPhones(): Observable<Phone[]>{
    return of(PhoneList);
  }
  getPhoneById(phoneId: number): Observable<Phone | undefined>{
    const phone=this.phones.find(user=>user.serialNumber===phoneId);
    return of(phone);
  }
  addPhone(newPhone:Phone): Observable<Phone[]>{
    this.phones.push(newPhone)
    return of(this.phones);
  }
  updatePhone(updatedPhone: Phone): Observable<Phone[]> {
    const index = this.phones.findIndex(user => user.serialNumber === updatedPhone.serialNumber);
    if (index !== -1) {
      this.phones[index] = updatedPhone;
    }
    return of(this.phones);
  }
  deletePhone(PhoneId: number): Observable<Phone[]> {
    this.phones = this.phones.filter(user => user.serialNumber !== PhoneId);
    return of(this.phones);
  }
}
