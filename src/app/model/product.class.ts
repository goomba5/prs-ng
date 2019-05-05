import { Vendor } from "./vendor.class";

export class Product {
  id: number;
  vendor: Vendor;
  partNumber: string;
  name: string;
  price: number;
  unit: string;
  photoPath: string;

  constructor(
    id: number,
    vendor: Vendor,
    name: string,
    partNumber: string,
    price: number,
    unit: string,
    photoPath: string
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
