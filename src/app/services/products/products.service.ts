import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://nora.com.ar'

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>('http://nora.com.ar/delete-product', { body: { id: productId } }).pipe(
      catchError(error => {
        console.error('Error deleting product:', error);
        return throwError(() => error); // Maneja el error permitiendo que el componente que suscriba maneje el error.
      })
    );
  }

  public getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://nora.com.ar/get-products').pipe(
      tap(products => console.log(products)),
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(() => error); // Maneja el error permitiendo que el componente que suscriba maneje el error.
      })
    );
  }

  public editProduct(product: any): Observable<any> {
    return this.http.put<any>('http://nora.com.ar/edit-product', product).pipe(
      tap(response => console.log(response)),
      catchError(error => {
        console.error('Error updating product:', error);
        return throwError(() => error); // Maneja el error permitiendo que el componente que suscriba maneje el error.
      })
    );
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>('http://nora.com.ar/add-product', product).pipe(
      tap((response : Response) => console.log("Producto añadido", response)),
      catchError(error => {
        console.error('Error añadiendo producto:', error);
        return throwError(() => error);
      })
    );
  }

  addAnalytic(product: any): Observable<any> {
    return this.http.post<any>('http://nora.com.ar/add-analytic', product).pipe(
      tap((response : Response) => console.log("Añalítica añadida", response)),
      catchError(error => {
        console.error('Error añadiendo analítica:', error);
        return throwError(() => error);
      })
    );
  }  
}
