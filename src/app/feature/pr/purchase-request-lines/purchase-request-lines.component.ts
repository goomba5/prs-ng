import { Component, OnInit } from "@angular/core";
import { PurchaseRequest } from "src/app/model/purchase-request.class";
import { PurchaseRequestService } from "src/app/service/purchase-request.service";
import { JsonResponse } from "../../../model/json-response.class";
import { ActivatedRoute, Router } from "@angular/router";
import { PurchaseRequestLineItem } from "src/app/model/purchase-request-line-item.class";
import { PurchaseRequestLineItemService } from "../../../service/purchase-request-line-item.service";

@Component({
  selector: "app-purchase-request-lines",
  templateUrl: "./purchase-request-lines.component.html",
  styleUrls: ["./purchase-request-lines.component.css"]
})
export class PurchaseRequestLinesComponent implements OnInit {
  title: string = "Purchase Request Summary";
  title1: string = "Purchase Request Lines";

  jr: JsonResponse;
  prId: number;
  resp: any;
  prSummary: PurchaseRequest;
  lines: PurchaseRequestLineItem[];

  constructor(
    private prSvc: PurchaseRequestService,
    private prliSvc: PurchaseRequestLineItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => (this.prId = parms["id"]));
    console.log("Pr id ", this.prId);
    this.prSvc.get(this.prId).subscribe(resp => {
      this.jr = resp;
      this.prSummary = this.jr.data as PurchaseRequest;
      console.log("Pr = ", this.prSummary);
    });

    // create service call for the lines
    this.prliSvc.getPrlisByPrId(this.prId).subscribe(resp => {
      this.jr = resp;
      this.lines = this.jr.data as PurchaseRequestLineItem[];
      console.log("Prli = " + this.lines);
    });
  }

  submit() {
    this.prSvc.submitForReview(this.prSummary).subscribe(jresp => {
      this.prSummary = jresp.data as PurchaseRequest;
      this.router.navigateByUrl("/purchase-request/list");
    });
  }
}
