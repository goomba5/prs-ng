export class Vendor {
  id: number;
  code: String;
  name: String;
  address: String;
  city: String;
  state: String;
  zip: String;
  phoneNumber: String;
  email: String;
  preApproved: boolean;
  active: boolean;

  constructor(
    id: number,
    code: String,
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    phoneNumber: String,
    email: String,
    preApproved: boolean,
    active: boolean
  ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.preApproved = preApproved;
    this.active = active;
  }

  about(): void {
    console.log(
      `id: ${this.id} code: ${this.code} name: ${this.name} address:${
        this.address
      } city: ${this.city} state: ${this.state} zip: ${this.zip} phoneNumber:${
        this.phoneNumber
      } email:${this.email} preApproved:${this.preApproved} active:${
        this.active
      }`
    );
  }
}
