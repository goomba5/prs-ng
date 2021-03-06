import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Vendor } from "../../../model/vendor.class";
import { VendorService } from "src/app/service/vendor.service";
import { JsonResponse } from "src/app/model/json-response.class";

@Component({
  selector: "app-vendor-create",
  templateUrl: "./vendor-create.component.html",
  styleUrls: ["./vendor-create.component.css"]
})
export class VendorCreateComponent implements OnInit {
  title: string = "Vendor Create";
  resp: any;
  jr: JsonResponse;

  vendor: Vendor = new Vendor(0, "", "", "", "", "", "", "", "", false, false);
  constructor(private vendorSvc: VendorService, private router: Router) {}

  ngOnInit() {}

  create() {
    this.vendorSvc.create(this.vendor).subscribe(resp => {
      this.jr = resp;
      this.router.navigate(["/vendor/list"]);
    });
  }
}
