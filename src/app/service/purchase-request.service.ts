import { Injectable } from "@angular/core";
import { JsonResponse } from "../model/json-response.class";
import { PurchaseRequest } from "../model/purchase-request.class";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

const url: string = "http://localhost:8080/products/";

@Injectable({
  providedIn: "root"
})
export class PurchaseRequestService {
  constructor(private http: HttpClient) {}

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(purchaseRequest: PurchaseRequest): Observable<any> {
    return this.http.post(url, purchaseRequest) as Observable<any>;
  }

  edit(purchaseRequest: PurchaseRequest): Observable<any> {
    console.log("edit");
    return this.http.put(url, purchaseRequest) as Observable<any>;
  }

  get(id: string): Observable<JsonResponse> {
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }
}
