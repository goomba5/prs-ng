import { Component, OnInit } from "@angular/core";
import { JsonResponse } from "src/app/model/json-response.class";
import { Router, ActivatedRoute } from "@angular/router";
import { PurchaseRequestService } from "../../../service/purchase-request.service";
import { PurchaseRequest } from "src/app/model/purchase-request.class";
import { User } from "../../../model/user.class";
import { SystemService } from "../../../service/system.service";

@Component({
  selector: "app-purchase-request-create",
  templateUrl: "./purchase-request-create.component.html",
  styleUrls: ["./purchase-request-create.component.css"]
})
export class PurchaseRequestCreateComponent implements OnInit {
  title: string = "Create Purchase Request";
  resp: any;
  user: User;
  jr: JsonResponse;
  purchaseRequests: PurchaseRequest;

  constructor(
    private purchaseRequestSvc: PurchaseRequestService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.sysSvc.data.user.loggedIn) {
      this.user = this.sysSvc.data.user.instance;
      this.purchaseRequests = new PurchaseRequest(
        0,
        this.user,
        "",
        "",
        "",
        "",
        "",
        0,
        "",
        ""
      );
    } else {
      console.error("User must log in before submitting new purchase request.");
    }
  }

  create() {
    this.purchaseRequestSvc.submitNew(this.purchaseRequests).subscribe(resp => {
      this.jr = resp;
      this.router.navigate(["/purchase-request/list"]);
    });
  }
}
