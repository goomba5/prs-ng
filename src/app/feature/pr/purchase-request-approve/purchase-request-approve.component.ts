import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../../model/user.class";
import { PurchaseRequest } from "../../../model/purchase-request.class";
import { PurchaseRequestLineItem } from "../../../model/purchase-request-line-item.class";
import { SystemService } from "../../../service/system.service";
import { PurchaseRequestService } from "../../../service/purchase-request.service";
import { PurchaseRequestLineItemService } from "../../../service/purchase-request-line-item.service";
import { JsonResponse } from "src/app/model/json-response.class";

@Component({
  selector: "app-purchase-request-approve",
  templateUrl: "./purchase-request-approve.component.html",
  styleUrls: ["./purchase-request-approve.component.css"]
})
export class PurchaseRequestApproveComponent implements OnInit {
  title = "Approve/Reject Purchase Request";
  title1 = "Lines";
  user: User;
  prId: number;
  jr: JsonResponse;
  purchaseRequest: PurchaseRequest;
  lineItems: PurchaseRequestLineItem[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sysSvc: SystemService,
    private prService: PurchaseRequestService,
    private prliService: PurchaseRequestLineItemService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.prId = parseInt(params.id);
      console.log("Id = " + this.prId);
      console.log("Id type is " + typeof this.prId);
      this.prService.get(this.prId).subscribe(resp => {
        console.log("Pr = " + resp);
        this.purchaseRequest = resp.data as PurchaseRequest;
        console.log("Pr id = " + this.purchaseRequest.id);

        this.prliService
          .getPrlisByPrId(this.purchaseRequest.id)
          .subscribe(resp => {
            this.lineItems = resp.data as PurchaseRequestLineItem[];
          });
      });
    });
  }

  approve() {
    this.prService.approve(this.purchaseRequest).subscribe(jr => {
      this.purchaseRequest = jr.data as PurchaseRequest;
      this.router.navigateByUrl("/purchase-request/list");
    });
  }

  reject() {
    console.log("Pr rejected");
    this.prService.reject(this.purchaseRequest).subscribe(jr => {
      this.purchaseRequest = jr.data as PurchaseRequest;
      this.router.navigateByUrl("/purchase-request/list");
    });
  }
}
