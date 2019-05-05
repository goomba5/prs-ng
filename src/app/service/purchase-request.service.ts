import { Injectable } from "@angular/core";
import { JsonResponse } from "../model/json-response.class";
import { PurchaseRequest } from "../model/purchase-request.class";
import { User } from "../model/user.class";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

const url: string = "http://localhost:8080/purchase-requests/";

@Injectable({
  providedIn: "root"
})
export class PurchaseRequestService {
  constructor(private http: HttpClient) {}

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  // create(purchaseRequest: PurchaseRequest): Observable<any> {
  //   return this.http.post(url+"/submit-new", purchaseRequest) as Observable<any>;
  // }

  submitNew(purchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(url + "/submit-new", purchaseRequest) as Observable<
      JsonResponse
    >;
  }

  prReviewList(id: number): Observable<JsonResponse> {
    console.log("Pr review");
    return this.http.get(url + "list-review/" + id) as Observable<JsonResponse>;
  }

  edit(purchaseRequest: PurchaseRequest): Observable<any> {
    console.log("edit");
    return this.http.put(url, purchaseRequest) as Observable<any>;
  }

  get(id: number): Observable<JsonResponse> {
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }

  submitForReview(purchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(url + "submit-review", purchaseRequest) as Observable<
      JsonResponse
    >;
  }

  approve(purchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(url + "approve", purchaseRequest) as Observable<
      JsonResponse
    >;
  }

  reject(purchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(url + "reject", purchaseRequest) as Observable<
      JsonResponse
    >;
  }
}
