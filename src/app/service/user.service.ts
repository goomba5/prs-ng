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

  create(user: User): Observable<any> {
    console.log("usersvc.create...");
    return this.http.post(url, user) as Observable<any>;
  }

  edit(user: User): Observable<any> {
    return this.http.put(url, user) as Observable<any>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("usersvc.get..  id=" + id);
    return this.http.get(url + id) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url + id) as Observable<JsonResponse>;
  }
}
