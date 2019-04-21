export class User {
  id: number;
  userName: String;
  password: String;
  firstName: String;
  lastName: String;
  phoneNumber: String;
  email: String;
  reviewer: boolean;
  admin: boolean;

  constructor(
    id: number,
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    reviewer: boolean,
    admin: boolean
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
