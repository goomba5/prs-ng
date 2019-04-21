import { User } from "./user.class";

export class PurchaseRequest {
  id: number;
  user: User;
  description: String;
  justification: String;
  dateNeeded: String;
  deliveryMode: String;
  status: String;
  total: number;
  submittedDate: String;
  reasonForRejection: String;

  constructor(
    id: number,
    user: User,
    description: String,
    justification: String,
    dateNeeded: String,
    deliveryMode: String,
    status: String,
    total: number,
    submittedDate: String,
    reasonForRejection: String
  ) {
    this.id = id;
    this.user = user;
    this.description = description;
    this.justification = justification;
    this.dateNeeded = dateNeeded;
    this.deliveryMode = deliveryMode;
    this.status = status;
    this.total = total;
    this.submittedDate = submittedDate;
    this.reasonForRejection = reasonForRejection;
  }

  about(): void {
    console.log(
      `id: ${this.id} user: ${this.user} description: ${
        this.description
      } justification: ${this.justification} dateNeeded: ${
        this.dateNeeded
      } deliveryMode: ${this.deliveryMode} status: ${this.status} total: ${
        this.total
      } submittedDate: ${this.submittedDate} reasonForRejection:${
        this.reasonForRejection
      }`
    );
  }
}
