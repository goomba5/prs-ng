import { Component, OnInit } from "@angular/core";
import { JsonResponse } from "../../../model/json-response.class";

import { UserService } from "../../../service/user.service";
import { User } from "../../../model/user.class";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  title: string = "User List";
  users: User[];
  jr: JsonResponse;

  sortCriteria: string = "username";
  sortOrder: string = "asc";

  constructor(private userSvc: UserService) {}

  ngOnInit() {
    this.userSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.users = this.jr.data as User[];
      console.log(this.users);
    });
  }

  sortBy(column: string): void {
    if (this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    } else {
      this.sortCriteria = column;
      this.sortOrder = "asc";
    }
  }
}
