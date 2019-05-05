export class User {
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  reviewer: boolean;
  admin: boolean;

  constructor(
    id: number,
    userName: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    reviewer: boolean = true,
    admin: boolean = true
  ) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.reviewer = reviewer;
    this.admin = admin;
  }

  about(): void {
    console.log(
      `id: ${this.id} userName: ${this.userName} password: ${
        this.password
      } firstName: ${this.firstName} lastName: ${this.lastName} phoneNumber: ${
        this.phoneNumber
      } email: ${this.email} reviewer: ${this.reviewer} admin: ${this.admin}`
    );
  }
}
