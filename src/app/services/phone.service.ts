import { Injectable } from '@angular/core';
import {catchError, Observable, of, throwError} from "rxjs";
import {Phone} from "../models/phone";
import {PhoneList} from "../models/mock-phone";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private apiUrl='api/phones';
  private phones:Phone[]=PhoneList;
  constructor(private http: HttpClient) { }
  getPhones(): Observable<Phone[]>{
    return this.http.get<Phone[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  getPhoneById(phoneId: number): Observable<Phone>{
    return this.http.get<Phone>(`${this.apiUrl}/${phoneId}`).pipe(catchError(this.handleError));
  }
  addPhone(newPhone:Phone): Observable<Phone>{
    return this.http.post<Phone>(this.apiUrl, newPhone).pipe(catchError(this.handleError));
  }
  updatePhone(updatedPhone: Phone): Observable<Phone | undefined> {
    const url = `${this.apiUrl}/${updatedPhone.serialNumber}`;
    return this.http.put<Phone>(url,updatedPhone).pipe(catchError(this.handleError));
  }
  deletePhone(PhoneId: number): Observable<Phone[]> {
    this.phones = this.phones.filter(user => user.serialNumber !== PhoneId);
    return of(this.phones);
  }
  generateNewID():number{
    return this.phones.length > 0 ? Math.max(...this.phones.map(phone => phone.serialNumber)) + 1 : 1;
  }
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
