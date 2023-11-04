import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiBaseUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/products`);
  }

  createProduct(productData: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/products`, productData);
  }

  updateProduct(productId: number, productData: any): Observable<any> {
    return this.http.put<any>(`${this.apiBaseUrl}/products/${productId}`, productData);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/products/${productId}`);
  }
  getProduct(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/products/${productId}`);
  }
}
