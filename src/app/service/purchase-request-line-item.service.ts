import { Injectable } from "@angular/core";
import { JsonResponse } from "../model/json-response.class";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PurchaseRequestLineItem } from "../model/purchase-request-line-item.class";

const url = "http://localhost:8080/purchase-request-line-items/";

@Injectable({
  providedIn: "root"
})
export class PurchaseRequestLineItemService {
  constructor(private http: HttpClient) {}

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  get(id: number): Observable<JsonResponse> {
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  getPrlisByPrId(id: number): Observable<JsonResponse> {
    return this.http.get(url + "lines-for-pr/" + id) as Observable<
      JsonResponse
    >;
  }

  create(prli: PurchaseRequestLineItem): Observable<JsonResponse> {
    return this.http.post(url, prli) as Observable<JsonResponse>;
  }

  edit(prli: PurchaseRequestLineItem): Observable<JsonResponse> {
    return this.http.put(url, prli) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    console.log("Prli Delete Method");
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }
}
