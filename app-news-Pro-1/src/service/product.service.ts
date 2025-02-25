import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  public getAllProductByType(type: string): Observable<any> {
    return this.httpClient.get(
      environment.REST_API + '/product/get-all-by-product-type/' + type
    );
  }
  public getAllProduct(): Observable<any> {
    return this.httpClient.get(
      environment.REST_API + '/product/get-all-product/'
    );
  }
  public getAllProductBill(): Observable<any> {
    return this.httpClient.get(
      environment.REST_API + '/productbill/get-all-productbill/'
    );
  }
  public getProductById(productId: number) : Observable<any> {
    return this.httpClient.get(
      environment.REST_API + '/product/get-product-by-id/' + productId
    );
  }

  public getProductByName(name: string) : Observable<any> {
    return this.httpClient.get(
      environment.REST_API + '/product/get-product-by-name/' + name
    );
  }
}
