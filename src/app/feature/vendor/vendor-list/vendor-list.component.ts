import { Component, OnInit } from "@angular/core";
import { JsonResponse } from "../../../model/json-response.class";

import { VendorService } from "../../../service/vendor.service";
import { Vendor } from "../../../model/vendor.class";

@Component({
  selector: "app-vendor-list",
  templateUrl: "./vendor-list.component.html",
  styleUrls: ["./vendor-list.component.css"]
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];
  jr: JsonResponse;
  constructor(private vendorSvc: VendorService) {}

  ngOnInit() {
    this.vendorSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.vendors = this.jr.data as Vendor[];
      console.log(this.vendors);
    });
  }
}
