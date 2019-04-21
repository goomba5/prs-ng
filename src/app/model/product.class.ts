import { Vendor } from "./vendor.class";

export class Product {
  id: number;
  vendor: Vendor;
  partNumber: String;
  name: String;
  price: number;
  unit: String;
  photoPath: String;

  constructor(
    id: number,
    vendor: Vendor,
    name: String,
    partNumber: String,
    price: number,
    unit: String,
    photoPath: String
  ) {
    this.id = id;
    this.vendor = vendor;
    this.name = name;
    this.partNumber = partNumber;
    this.price = price;
    this.unit = unit;
    this.photoPath = photoPath;
  }

  about(): void {
    console.log(
      `id: ${this.id} vendor: ${this.vendor} partNumber:${
        this.partNumber
      } name: ${this.name} price: ${this.price} unit: ${this.unit} photoPath: ${
        this.photoPath
      }`
    );
  }
}
