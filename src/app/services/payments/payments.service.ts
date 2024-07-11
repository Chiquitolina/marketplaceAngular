import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  constructor(private http: HttpClient) {}

  public createOrder(params: any): Observable<any> {
    console.log(params)
    return this.http.post('http://localhost:3000/create-order', params);
  }
}
