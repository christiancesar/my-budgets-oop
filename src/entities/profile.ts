import { Address } from "./address.js";
import { Company } from "./company.js";
import { Entity } from "./entity.js";

export class Profile extends Entity {
  private firstName: string;
  private lastName: string;
  private fullName: string;
  private phone: string[];
  private individualTaxNumber: string;
  private avatar?: string | null;
  private createdAt: Date;
  private updatedAt?: Date | null;

  constructor(
    firstName: string,
    lastName: string,
    phone: string[],
    individualTaxNumber: string,
    id?: string
  ) {
    super(id);
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.phone = phone;
    this.individualTaxNumber = individualTaxNumber;
    this.createdAt = new Date();
  }

  updateProfile(
    firstName: string,
    lastName: string,
    phone: string[],
    individualTaxNumber: string,
    avatar?: string | null
  ) {
    this.firstName = firstName ?? this.firstName;
    this.lastName = lastName ?? this.lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.phone = phone ?? this.phone;
    this.individualTaxNumber = individualTaxNumber ?? this.individualTaxNumber;
    this.avatar = avatar ?? this.avatar;
    this.updatedAt = new Date();
  }
}
