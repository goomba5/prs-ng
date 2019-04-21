import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserListComponent } from "./feature/user/user-list/user-list.component";
import { UserCreateComponent } from "./feature/user/user-create/user-create.component";
import { VendorListComponent } from "src/app/feature/vendor/vendor-list/vendor-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/user/list", pathMatch: "full" },
  { path: "user/list", component: UserListComponent },
  { path: "user/create", component: UserCreateComponent },
  { path: "vendor/list", component: VendorListComponent },
  { path: "**", component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
