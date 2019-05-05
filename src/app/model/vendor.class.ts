export class Vendor {
  id: number;
  code: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  email: string;
  preApproved: boolean;
  active: boolean;

  constructor(
    conId: number = 0,
    conCode: string = "",
    conName: string = "",
    conAddress: string = "",
    conCity: string = "",
    conState: string = "",
    conZip: string = "",
    conPhoneNumber: string = "",
    conEmail: string = "",
    conPreApproved: boolean = false,
    conActive: boolean = false
  ) {
    this.id = conId;
    this.code = conCode;
    this.name = conName;
    this.address = conAddress;
    this.city = conCity;
    this.state = conState;
    this.zip = conZip;
    this.phoneNumber = conPhoneNumber;
    this.email = conEmail;
    this.preApproved = conPreApproved;
    this.active = conActive;
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
