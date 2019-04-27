import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Vendor } from "../../../model/vendor.class";
import { Product } from "../../../model/product.class";
import { VendorService } from "../../../service/vendor.service";
import { ProductService } from "../../../service/product.service";
import { JsonResponse } from "../../../model/json-response.class";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  title: string = "Edit Product";

  jr: JsonResponse;
  id: string;
  resp: any;
  pdt: Product;
  vendors: Vendor[];

  product: Product;
  constructor(
    private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => (this.id = parms["id"]));
    this.vendorSvc.list().subscribe(resp => {
      this.jr = resp;
      this.vendors = this.jr.data as Vendor[];

      this.productSvc.get(this.id).subscribe(jrresp => {
        this.jr = jrresp;
        this.pdt = this.jr.data as Product;
      });
    });
  }

  edit() {
    this.productSvc.edit(this.pdt).subscribe(resp => {
      console.log("Edit", this.pdt);
      this.resp = resp;
      this.router.navigate(["/product/list"]);
    });
  }

  compareFn(v1: number, v2: number): boolean {
    console.log("Compare");
    return v1 === v2;
  }
}
