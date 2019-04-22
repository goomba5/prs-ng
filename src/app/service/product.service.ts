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
}
