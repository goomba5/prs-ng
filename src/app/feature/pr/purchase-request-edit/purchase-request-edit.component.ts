import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PurchaseRequestService } from "../../../service/purchase-request.service";
import { JsonResponse } from "../../../model/json-response.class";
import { PurchaseRequest } from "src/app/model/purchase-request.class";

@Component({
  selector: "app-purchase-request-edit",
  templateUrl: "./purchase-request-edit.component.html",
  styleUrls: ["./purchase-request-edit.component.css"]
})
export class PurchaseRequestEditComponent implements OnInit {
  title: string = "Edit Purchase Request";

  jr: JsonResponse;
  id: string;
  resp: any;
  prEdit: PurchaseRequest;

  constructor(
    private router: Router,
    private prSvc: PurchaseRequestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parms => (this.id = parms["id"]));
    this.prSvc.get(this.id).subscribe(resp => {
      this.jr = resp;
      this.prEdit = this.jr.data as PurchaseRequest;
      console.log("Print PR" + this.prEdit);
    });
  }

  edit() {
    this.prSvc.edit(this.prEdit).subscribe(resp => {
      console.log("Edit", this.prEdit);
      this.resp = resp;
      this.router.navigate(["/purchaserequest/list"]);
    });
  }
}
