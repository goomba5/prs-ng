import { Component, OnInit } from "@angular/core";
import { JsonResponse } from "../../../model/json-response.class";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../../model/user.class";
import { PurchaseRequest } from "../../../model/purchase-request.class";
import { PurchaseRequestService } from "../../../service/purchase-request.service";
import { SystemService } from "../../../service/system.service";

@Component({
  selector: "app-purchase-request-review",
  templateUrl: "./purchase-request-review.component.html",
  styleUrls: ["./purchase-request-review.component.css"]
})
export class PurchaseRequestReviewComponent implements OnInit {
  title: string = "Purchase Request Review";
  prReviews: PurchaseRequest[];
  jr: JsonResponse;

  isLoggedIn: User;

  constructor(
    private purchaseRequestSvc: PurchaseRequestService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.sysSvc.data.user.loggedIn) {
      this.isLoggedIn = this.sysSvc.data.user.instance;
    } else {
      console.log("Must log in before reviewing purchase requests.");
    }

    this.purchaseRequestSvc
      .prReviewList(this.isLoggedIn.id)
      .subscribe(jresp => {
        this.jr = jresp;
        this.prReviews = this.jr.data as PurchaseRequest[];
        console.log("1", this.prReviews);
      });
  }
}
