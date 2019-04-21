import { Injectable } from "@angular/core";
import { User } from "../model/user.class";
import { JsonResponse } from "../model/json-response.class";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

const url: string = "http://localhost:8080/users/";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }
}
