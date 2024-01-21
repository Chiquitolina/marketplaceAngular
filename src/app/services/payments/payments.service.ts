import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  constructor(private http: HttpClient) {}

  public createOrder(params: any): Observable<any> {
    return this.http.post('https://nora.com.ar/create-order', params);
  }
}
