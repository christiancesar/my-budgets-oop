import { Address } from "./address.js";
import { Entity } from "./entity.js";

export class Customer extends Entity {
  private firstName: string;
  private lastName: string;
  private fullName: string;
  private phone: string[];
  private email?: string;
  private individualTaxNumber?: string;
  private address?: Address | null;
  private createdAt: Date;
  private updatedAt?: Date | null;

  constructor(
    firstName: string,
    lastName: string,
    phone: string[],
    email?: string,
    individualTaxNumber?: string,
    address?: Address,
    id?: string
  ) {
    super(id);
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.email = email;
    this.phone = phone;
    this.individualTaxNumber = individualTaxNumber;
    this.address = address;
    this.createdAt = new Date();
  }

  updateCustomer(
    firstName?: string,
    lastName?: string,
    phone?: string[],
    email?: string,
    individualTaxNumber?: string,
    address?: Address
  ) {
    this.firstName = firstName ?? this.firstName;
    this.lastName = lastName ?? this.lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.email = email ?? this.email;
    this.phone = phone ?? this.phone;
    this.phone = phone ?? this.phone;
    this.individualTaxNumber = individualTaxNumber ?? this.individualTaxNumber;
    this.address = address ?? this.address;
    this.updatedAt = new Date();
  }

  getFullName() {
    return this.fullName;
  }

  getEmail() {
    return this.email;
  }

  getPhone() {
    return this.phone;
  }

  getAddress() {
    return this.address;
  }

  getIndividualTaxNumber() {
    return this.individualTaxNumber;
  }

  getAddresses() {
    return this.address;
  }
}
