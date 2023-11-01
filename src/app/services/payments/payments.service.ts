import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient) { }

  public createOrder(params: any): Observable<any> {
    return this.http.post('https://vps-3705068-x.dattaweb.com/create-order', params)
  }
}



