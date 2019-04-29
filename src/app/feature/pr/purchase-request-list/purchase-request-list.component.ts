import { Component, OnInit } from "@angular/core";
import { JsonResponse } from "../../../model/json-response.class";
import { ActivatedRoute, Router } from "@angular/router";
import { PurchaseRequest } from "../../../model/purchase-request.class";
import { User } from "../../../model/user.class";
import { PurchaseRequestService } from "../../../service/purchase-request.service";
import { UserService } from "../../../service/user.service";

@Component({
  selector: "app-purchase-request-list",
  templateUrl: "./purchase-request-list.component.html",
  styleUrls: ["./purchase-request-list.component.css"]
})
export class PurchaseRequestListComponent implements OnInit {
  title: string = "Purchase Request List";
  purchaseRequests: PurchaseRequest[];
  id: string;
  jr: JsonResponse;

  sortCriteria: string = "username";
  sortOrder: string = "asc";

  constructor(
    private purchaseRequestSvc: PurchaseRequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.purchaseRequestSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.purchaseRequests = this.jr.data as PurchaseRequest[];
      console.log(this.purchaseRequests);
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
