import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Phone} from "../models/phone";
import {PhoneList} from "../models/mock-phone";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }
  getPhones(): Observable<Phone[]>{
    return of(PhoneList);
  }
}
