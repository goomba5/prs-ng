import { Component, OnInit } from "@angular/core";
import { Product } from "../../../model/product.class";
import { Vendor } from "../../../model/vendor.class";
import { JsonResponse } from "../../../model/json-response.class";
import { ProductService } from "src/app/service/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  title: string = "Product";
  products: Product[];
  jr: JsonResponse;

  constructor(private productSvc: ProductService) {}

  ngOnInit() {
    this.productSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.products = this.jr.data as Product[];
      console.log(this.products);
    });
  }
}
