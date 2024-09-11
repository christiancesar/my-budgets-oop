import { Address } from "./address.js";
import { Entity } from "./entity.js";

export class Company extends Entity {
  private name: string;
  private description: string;
  private email: string;
  private phones: string[];
  private stateRegistration: string;
  private employerIdentificationNumber: string;
  private address?: Address | null;
  private createdAt: Date;
  private updatedAt?: Date | null;

  constructor(
    name: string,
    description: string,
    email: string,
    phones: string[],
    stateRegistration: string,
    employerIdentificationNumber: string,
    address?: Address | null,
    id?: string
  ) {
    super(id);
    this.name = name;
    this.description = description;
    this.email = email;
    this.phones = phones;
    this.stateRegistration = stateRegistration;
    this.employerIdentificationNumber = employerIdentificationNumber;
    this.address = address;
    this.createdAt = new Date();
  }

  updateCompany(
    name?: string,
    description?: string,
    email?: string,
    phones?: string[],
    stateRegistration?: string,
    employerIdentificationNumber?: string,
    id?: string
  ) {
    this.name = name ?? this.name;
    this.description = description ?? this.description;
    this.email = email ?? this.email;
    this.phones = phones ?? this.phones;
    this.stateRegistration = stateRegistration ?? this.stateRegistration;
    this.employerIdentificationNumber =
      employerIdentificationNumber ?? this.employerIdentificationNumber;
    this.updatedAt = new Date();
  }

  updateAddress(address: Address) {
    this.address = address;
    this.updatedAt = new Date();
  }
}
