import { Injectable } from "@angular/core";
import { Product } from "../model/product.class";
import { JsonResponse } from "../model/json-response.class";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

const url: string = "http://localhost:8080/products/";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(product: Product): Observable<any> {
    console.log("productSvc.create...");
    return this.http.post(url, product) as Observable<any>;
  }

  edit(product: Product): Observable<any> {
    console.log("edit");
    return this.http.put(url, product) as Observable<any>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("productSvc.get..  id=" + id);
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }
}
