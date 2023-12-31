import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public async getProducts(): Promise<any[]> {
    try {
      const response = await this.http.get<any[]>('http://localhost:3000/get-products').toPromise();
      console.log(response);
      return response as any[];
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Puedes manejar el error según tus necesidades
    }
  }
}
