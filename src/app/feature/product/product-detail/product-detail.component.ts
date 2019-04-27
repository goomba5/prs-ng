import { Component, OnInit } from "@angular/core";
import { JsonResponse } from "../../../model/json-response.class";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../../model/product.class";
import { ProductService } from "../../../service/product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  title: string = "Product Detail";
  jr: JsonResponse;
  product: Product;

  constructor(
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => {
      let id = parms["id"];
      this.getProductById(id);
    });
  }

  getProductById(id: string) {
    this.productSvc.get(id).subscribe(jsresp => {
      this.jr = jsresp;
      this.product = this.jr.data as Product;
    });
  }
  remove(): void {
    this.productSvc.delete(this.product.id).subscribe(res => {
      this.router.navigateByUrl("/product/list");
    });
  }
}
