import { PurchaseRequest } from "./purchase-request.class";
import { Product } from "./product.class";

export class PurchaseRequestLineItem {
  id: number;
  purchaseRequest: PurchaseRequest;
  product: Product;
  quantity: number;
  active: boolean;

  constructor(
    id: number,
    purchaseRequest: PurchaseRequest,
    product: Product,
    quantity: number,
    active: boolean
  ) {
    this.id = id;
    this.purchaseRequest = purchaseRequest;
    this.product = product;
    this.quantity = quantity;
    this.active = active;
  }

  about(): void {
    console.log(
      `id: ${this.id} purchaseRequest: ${this.purchaseRequest} product: ${
        this.product
      } quantity: ${this.quantity} active: ${this.active}`
    );
  }
}
