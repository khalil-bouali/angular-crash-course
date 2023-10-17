import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductRepresentation} from "../models/product-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakestoreapi.com/'

  constructor(private httpClient: HttpClient) { }

  getAllProductsWithLimit(limit: number = 5) {
    const productsUrl = `${this.baseUrl}products?limit=${limit}`;
    return this.httpClient.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProduct(product: ProductRepresentation) {
    const productsUrl = `${this.baseUrl}products`;
    return this.httpClient.post<ProductRepresentation>(productsUrl, product);
  }

}
