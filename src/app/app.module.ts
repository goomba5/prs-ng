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
import { MenuComponent } from './core/menu/menu.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, VendorListComponent, MenuComponent, UserCreateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService, VendorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
