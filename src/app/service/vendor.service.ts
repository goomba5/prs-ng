import { Injectable } from "@angular/core";
import { Vendor } from "../model/vendor.class";
import { JsonResponse } from "../model/json-response.class";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

const url: string = "http://localhost:8080/vendors/";

@Injectable({
  providedIn: "root"
})
export class VendorService {
  constructor(private http: HttpClient) {}

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }
}
