import { PurchaseRequest } from "./purchase-request.class";
import { Product } from "./product.class";

export class PurchaseRequestLineItem {
  id: number;
  purchaseRequest: PurchaseRequest;
  product: Product;
  quantity: number;

  constructor(
    id: number,
    purchaseRequest: PurchaseRequest,
    product: Product,
    quantity: number
  ) {
    this.id = id;
    this.purchaseRequest = purchaseRequest;
    this.product = product;
    this.quantity = quantity;
  }

  about(): void {
    console.log(
      `id: ${this.id} purchaseRequest: ${this.purchaseRequest} product: ${
        this.product
      } quantity: ${this.quantity}`
    );
  }
}
