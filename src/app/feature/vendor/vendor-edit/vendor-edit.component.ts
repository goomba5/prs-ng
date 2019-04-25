import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Vendor } from "../../../model/vendor.class";
import { VendorService } from "../../../service/vendor.service";
import { JsonResponse } from "../../../model/json-response.class";

@Component({
  selector: "app-vendor-edit",
  templateUrl: "./vendor-edit.component.html",
  styleUrls: ["./vendor-edit.component.css"]
})
export class VendorEditComponent implements OnInit {
  title: string = "Vendor Edit";

  jr: JsonResponse;
  id: string;
  resp: any;

  vendor: Vendor;
  constructor(
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => (this.id = parms["id"]));
    console.log("user edit ngOnInit", "id = " + this.id);
    this.vendorSvc.get(this.id).subscribe(jrresp => {
      this.jr = jrresp;
      this.vendor = this.jr.data as Vendor;
    });
  }

  edit() {
    this.vendorSvc.edit(this.vendor).subscribe(resp => {
      this.resp = resp;
      this.router.navigate(["/vendor/list"]);
    });
  }
}
