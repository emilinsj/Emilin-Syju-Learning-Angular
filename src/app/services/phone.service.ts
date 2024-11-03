import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {Phone} from "../models/phone";
import {PhoneList} from "../models/mock-phone";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private apiUrl='api/phones';
  private phones:Phone[]=PhoneList;
  constructor(private http: HttpClient) { }
  getPhones(): Observable<Phone[]>{
    return this.http.get<Phone[]>(this.apiUrl);
  }
  getPhoneById(phoneId: number): Observable<Phone>{
    return this.http.get<Phone>(`${this.apiUrl}/${phoneId}`);
  }
  addPhone(newPhone:Phone): Observable<Phone>{
    return this.http.post<Phone>(this.apiUrl, newPhone);
  }
  updatePhone(updatedPhone: Phone): Observable<Phone | undefined> {
    const url = `${this.apiUrl}/${updatedPhone.serialNumber}`;
    return this.http.put<Phone>(url,updatedPhone);
  }
  deletePhone(PhoneId: number): Observable<{}> {
    const url = `${this.apiUrl}/${PhoneId}`;
    return this.http.delete(url)
  }
  generateNewID():number{
    return this.phones.length > 0 ? Math.max(...this.phones.map(phone => phone.serialNumber)) + 1 : 1;
  }
}
