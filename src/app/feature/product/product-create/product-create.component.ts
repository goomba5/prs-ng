import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../../../model/product.class";
import { Vendor } from "../../../model/vendor.class";
import { ProductService } from "../../../service/product.service";
import { VendorService } from "src/app/service/vendor.service";
import { JsonResponse } from "src/app/model/json-response.class";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"]
})
export class ProductCreateComponent implements OnInit {
  title: string = "Create Product";
  resp: any;
  jr: JsonResponse;

  product: Product = new Product(0, new Vendor(), "", "", 0, "", "");
  vendors: Vendor[];

  constructor(
    private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.vendorSvc.list().subscribe(jresp => {
      this.jr = jresp as JsonResponse;
      this.vendors = this.jr.data as Vendor[];
    });
  }

  create() {
    this.productSvc.create(this.product).subscribe(resp => {
      this.jr = resp;
      this.router.navigate(["/product/list"]);
    });
  }
}
