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

  create(vendor: Vendor): Observable<any> {
    console.log("vendorSvc.create...");
    return this.http.post(url, vendor) as Observable<any>;
  }

  edit(vendor: Vendor): Observable<any> {
    console.log("edit");
    return this.http.put(url, vendor) as Observable<any>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("vendorSvc.get..  id=" + id);
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }
}
