import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserListComponent } from "./feature/user/user-list/user-list.component";
import { UserCreateComponent } from "./feature/user/user-create/user-create.component";
import { VendorListComponent } from "src/app/feature/vendor/vendor-list/vendor-list.component";
import { ProductListComponent } from "src/app/feature/product/product-list/product-list.component";
import { UserEditComponent } from "src/app/feature/user/user-edit/user-edit.component";
import { UserDetailComponent } from "src/app/feature/user/user-detail/user-detail.component";
import { VendorDetailComponent } from "src/app/feature/vendor/vendor-detail/vendor-detail.component";
import { VendorEditComponent } from "src/app/feature/vendor/vendor-edit/vendor-edit.component";
import { VendorCreateComponent } from "src/app/feature/vendor/vendor-create/vendor-create.component";
import { ProductCreateComponent } from "src/app/feature/product/product-create/product-create.component";
import { ProductDetailComponent } from "src/app/feature/product/product-detail/product-detail.component";
import { ProductEditComponent } from "src/app/feature/product/product-edit/product-edit.component";
import { PurchaseRequest } from "src/app/model/purchase-request.class";
import { PurchaseRequestListComponent } from "src/app/feature/pr/purchase-request-list/purchase-request-list.component";
import { UserLoginComponent } from "src/app/feature/user/user-login/user-login.component";
import { PurchaseRequestCreateComponent } from "src/app/feature/pr/purchase-request-create/purchase-request-create.component";
import { PurchaseRequestDetailComponent } from "src/app/feature/pr/purchase-request-detail/purchase-request-detail.component";
import { PurchaseRequestEditComponent } from "src/app/feature/pr/purchase-request-edit/purchase-request-edit.component";
import { PurchaseRequestReviewComponent } from "src/app/feature/pr/purchase-request-review/purchase-request-review.component";
import { PurchaseRequestLinesComponent } from "src/app/feature/pr/purchase-request-lines/purchase-request-lines.component";

const routes: Routes = [
  { path: "", redirectTo: "/user/list", pathMatch: "full" },
  { path: "user/login", component: UserLoginComponent },
  { path: "user/list", component: UserListComponent },
  { path: "user/create", component: UserCreateComponent },
  { path: "user/detail/:id", component: UserDetailComponent },
  { path: "user/edit/:id", component: UserEditComponent },

  { path: "vendor/list", component: VendorListComponent },
  { path: "vendor/create", component: VendorCreateComponent },
  { path: "vendor/detail/:id", component: VendorDetailComponent },
  { path: "vendor/edit/:id", component: VendorEditComponent },

  { path: "product/list", component: ProductListComponent },
  { path: "product/create", component: ProductCreateComponent },
  { path: "product/detail/:id", component: ProductDetailComponent },
  { path: "product/edit/:id", component: ProductEditComponent },

  {
    path: "purchaserequest/list",
    component: PurchaseRequestListComponent
  },
  {
    path: "purchaserequest/create",
    component: PurchaseRequestCreateComponent
  },
  {
    path: "purchaserequest/detail/:id",
    component: PurchaseRequestDetailComponent
  },
  {
    path: "purchaserequest/edit/:id",
    component: PurchaseRequestEditComponent
  },
  {
    path: "purchaserequest/review",
    component: PurchaseRequestReviewComponent
  },
  {
    path: "purchaserequest/lines/:id",
    component: PurchaseRequestLinesComponent
  },

  { path: "**", component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
