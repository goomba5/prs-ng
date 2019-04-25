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

const routes: Routes = [
  { path: "", redirectTo: "/user/list", pathMatch: "full" },
  { path: "user/list", component: UserListComponent },
  { path: "user/create", component: UserCreateComponent },
  { path: "user/detail/:id", component: UserDetailComponent },
  { path: "user/edit/:id", component: UserEditComponent },
  { path: "vendor/list", component: VendorListComponent },
  { path: "vendor/create", component: VendorCreateComponent },
  { path: "vendor/detail/:id", component: VendorDetailComponent },
  { path: "vendor/edit/:id", component: VendorEditComponent },
  { path: "product/list", component: ProductListComponent },
  { path: "**", component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
