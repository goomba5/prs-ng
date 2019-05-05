import { Component, OnInit } from "@angular/core";
import { PurchaseRequest } from "src/app/model/purchase-request.class";
import { PurchaseRequestService } from "src/app/service/purchase-request.service";
import { JsonResponse } from "../../../model/json-response.class";
import { ActivatedRoute, Router } from "@angular/router";
import { PurchaseRequestLineItem } from "src/app/model/purchase-request-line-item.class";
import { PurchaseRequestLineItemService } from "../../../service/purchase-request-line-item.service";
import { parseIntAutoRadix } from "@angular/common/src/i18n/format_number";

@Component({
  selector: "app-purchase-request-line-item-edit",
  templateUrl: "./purchase-request-line-item-edit.component.html",
  styleUrls: ["./purchase-request-line-item-edit.component.css"]
})
export class PurchaseRequestLineItemEditComponent implements OnInit {
  title = "Edit Line Item";
  lineItem: PurchaseRequestLineItem;

  constructor(
    private prliService: PurchaseRequestLineItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // get the prli so you can pass it to the delete method
    this.route.params.subscribe(resp => {
      this.prliService.get(resp.id).subscribe(jresp => {
        this.lineItem = jresp.data as PurchaseRequestLineItem;
      });
    });
  }

  edit() {
    // pass the lineItem object to the prliService edit method because the PRLI Controller needs it as an argument
    this.prliService.edit(this.lineItem).subscribe(resp => {
      this.lineItem = resp.data as PurchaseRequestLineItem;
      this.router.navigateByUrl(
        "/purchase-request/lines/" + this.lineItem.purchaseRequest.id
      );
      console.log("prli = " + this.lineItem);
    });
  }

  delete() {
    this.prliService.delete(this.lineItem.id).subscribe(resp => {
      this.lineItem = resp.data as PurchaseRequestLineItem;
      this.router.navigateByUrl(
        "/purchase-request/lines/" + this.lineItem.purchaseRequest.id
      );
    });
  }
}
