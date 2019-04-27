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
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { SortPipe } from './pipe/sort.pipe';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { PurchaseRequestListComponent } from './feature/pr/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestCreateComponent } from './feature/pr/purchase-request-create/purchase-request-create.component';

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
    PurchaseRequestCreateComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService, VendorService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
