import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserService } from "./service/user.service";
import { UserListComponent } from "./feature/user/user-list/user-list.component";
import { VendorListComponent } from "./feature/vendor/vendor-list/vendor-list.component";
import { VendorService } from "src/app/service/vendor.service";
import { MenuComponent } from "./core/menu/menu.component";
import { UserCreateComponent } from "./feature/user/user-create/user-create.component";
import { ProductListComponent } from "./feature/product/product-list/product-list.component";
import { ProductService } from "src/app/service/product.service";
import { UserEditComponent } from "./feature/user/user-edit/user-edit.component";
import { UserDetailComponent } from "./feature/user/user-detail/user-detail.component";
import { VendorEditComponent } from "./feature/vendor/vendor-edit/vendor-edit.component";
import { VendorDetailComponent } from "./feature/vendor/vendor-detail/vendor-detail.component";
import { VendorCreateComponent } from "./feature/vendor/vendor-create/vendor-create.component";
import { SortPipe } from "./pipe/sort.pipe";
import { ProductCreateComponent } from "./feature/product/product-create/product-create.component";
import { ProductDetailComponent } from "./feature/product/product-detail/product-detail.component";
import { ProductEditComponent } from "./feature/product/product-edit/product-edit.component";
import { PurchaseRequestListComponent } from "./feature/pr/purchase-request-list/purchase-request-list.component";
import { PurchaseRequestCreateComponent } from "./feature/pr/purchase-request-create/purchase-request-create.component";
import { PurchaseRequestService } from "src/app/service/purchase-request.service";
import { UserLoginComponent } from "./feature/user/user-login/user-login.component";
import { SystemService } from "src/app/service/system.service";
import { PurchaseRequestDetailComponent } from "./feature/pr/purchase-request-detail/purchase-request-detail.component";
import { PurchaseRequestEditComponent } from "./feature/pr/purchase-request-edit/purchase-request-edit.component";
import { PurchaseRequestReviewComponent } from "./feature/pr/purchase-request-review/purchase-request-review.component";
import { PurchaseRequestLinesComponent } from "./feature/pr/purchase-request-lines/purchase-request-lines.component";
import { PurchaseRequestLineItemService } from "src/app/service/purchase-request-line-item.service";
import { PurchaseRequestLineItemEditComponent } from './feature/prli/purchase-request-line-item-edit/purchase-request-line-item-edit.component';
import { PurchaseRequestLineItemCreateComponent } from './feature/prli/purchase-request-line-item-create/purchase-request-line-item-create.component';
import { PurchaseRequestApproveComponent } from './feature/pr/purchase-request-approve/purchase-request-approve.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    VendorListComponent,
    MenuComponent,
    UserCreateComponent,
    ProductListComponent,
    UserEditComponent,
    UserDetailComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    SortPipe,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    PurchaseRequestListComponent,
    PurchaseRequestCreateComponent,
    UserLoginComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestReviewComponent,
    PurchaseRequestLinesComponent,
    PurchaseRequestLineItemEditComponent,
    PurchaseRequestLineItemCreateComponent,
    PurchaseRequestApproveComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    UserService,
    VendorService,
    ProductService,
    PurchaseRequestService,
    PurchaseRequestLineItemService,
    SystemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
