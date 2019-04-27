import { Component, OnInit } from "@angular/core";
import { JsonResponse } from "../../../model/json-response.class";
import { ActivatedRoute, Router } from "@angular/router";
import { VendorService } from "../../../service/vendor.service";

import { Vendor } from "../../../model/vendor.class";

@Component({
  selector: "app-vendor-detail",
  templateUrl: "./vendor-detail.component.html",
  styleUrls: ["./vendor-detail.component.css"]
})
export class VendorDetailComponent implements OnInit {
  title: string = "Vendor Detail";
  jr: JsonResponse;
  vendor: Vendor;

  constructor(
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => {
      let id = parms["id"];
      this.getVendorById(id);
    });
  }

  getVendorById(id: string) {
    this.vendorSvc.get(id).subscribe(jsresp => {
      this.jr = jsresp;
      this.vendor = this.jr.data as Vendor;
    });
  }
  remove(): void {
    this.vendorSvc.delete(this.vendor.id).subscribe(res => {
      this.router.navigateByUrl("/vendor/list");
    });
  }
}
