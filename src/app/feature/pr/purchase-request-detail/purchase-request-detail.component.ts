import { Component, OnInit } from "@angular/core";
import { JsonResponse } from "../../../model/json-response.class";
import { ActivatedRoute, Router } from "@angular/router";
import { PurchaseRequest } from "../../../model/purchase-request.class";
import { PurchaseRequestService } from "../../../service/purchase-request.service";

@Component({
  selector: "app-purchase-request-detail",
  templateUrl: "./purchase-request-detail.component.html",
  styleUrls: ["./purchase-request-detail.component.css"]
})
export class PurchaseRequestDetailComponent implements OnInit {
  title: string = "Product Detail";
  jr: JsonResponse;
  purchaseRequest: PurchaseRequest;

  constructor(
    private purchaseReqSvc: PurchaseRequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => {
      let id = parms["id"];
      this.getPurchaseRequestById(id);
    });
  }

  getPurchaseRequestById(id: string) {
    this.purchaseReqSvc.get(id).subscribe(jsresp => {
      this.jr = jsresp;
      this.purchaseRequest = this.jr.data as PurchaseRequest;
    });
  }
  remove(): void {
    this.purchaseReqSvc.delete(this.purchaseRequest.id).subscribe(res => {
      this.router.navigateByUrl("/purchaserequest/list");
    });
  }
}
