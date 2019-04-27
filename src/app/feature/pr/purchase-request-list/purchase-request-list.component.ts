import { Component, OnInit } from "@angular/core";
import { JsonResponse } from "../../../model/json-response.class";
import { ActivatedRoute, Router } from "@angular/router";
import { PurchaseRequest } from "../../../model/purchase-request.class";
import { PurchaseRequestService } from "src/app/service/purchase-request.service";

@Component({
  selector: "app-purchase-request-list",
  templateUrl: "./purchase-request-list.component.html",
  styleUrls: ["./purchase-request-list.component.css"]
})
export class PurchaseRequestListComponent implements OnInit {
  title: string = "Product";
  purchaseRequest: PurchaseRequest[];
  jr: JsonResponse;

  sortCriteria: string = "username";
  sortOrder: string = "asc";

  constructor(private purchaseRequestSvc: PurchaseRequestService) {}

  ngOnInit() {
    this.purchaseRequestSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.purchaseRequest = this.jr.data as PurchaseRequest[];
      console.log(this.purchaseRequest);
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
