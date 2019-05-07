import { Component, OnInit } from "@angular/core";
import { JsonResponse } from "../../../model/json-response.class";
import { ActivatedRoute, Router } from "@angular/router";
import { PurchaseRequestLineItem } from "src/app/model/purchase-request-line-item.class";
import { Product } from "../../../model/product.class";
import { ProductService } from "../../../service/product.service";
import { PurchaseRequestService } from "../../../service/purchase-request.service";
import { PurchaseRequestLineItemService } from "../../../service/purchase-request-line-item.service";
import { PurchaseRequest } from "src/app/model/purchase-request.class";

@Component({
  selector: "app-purchase-request-line-item-create",
  templateUrl: "./purchase-request-line-item-create.component.html",
  styleUrls: ["./purchase-request-line-item-create.component.css"]
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {
  title = "Add Line Item";

  product: Product;
  products: Product[];
  pr: PurchaseRequest;
  lineItem: PurchaseRequestLineItem = new PurchaseRequestLineItem(
    0,
    this.pr,
    this.product,
    0
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prService: PurchaseRequestService,
    private prliService: PurchaseRequestLineItemService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.list().subscribe(jr => {
      this.products = jr.data as Product[];
      console.log("PRLI Products = " + this.products);
    });

    this.route.params.subscribe(params => {
      this.prService.get(params.id).subscribe(jr => {
        this.pr = jr.data as PurchaseRequest;
        this.lineItem.purchaseRequest = this.pr;
      });
    });
  }

  create() {
    this.prliService.create(this.lineItem).subscribe(resp => {
      this.lineItem = resp.data as PurchaseRequestLineItem;
      this.router.navigateByUrl(
        "/purchase-request/lines/" + this.lineItem.purchaseRequest.id
      );
    });
  }
}
