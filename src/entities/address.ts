import { N } from "vitest/dist/chunks/environment.0M5R1SX_.js";
import { Entity } from "./entity.js";

export class Address extends Entity {
  private street: string;
  private number: string;
  private complement: string;
  private district: string;
  private city: string;
  private state: string;
  private postalCode: string; // pattern: /^\d{5}-?\d{3}$/
  private createdAt: Date;
  private updatedAt?: Date | null;

  constructor(
    street: string,
    number: string,
    complement: string,
    district: string,
    city: string,
    state: string,
    postalCode: string,
    id?: string
  ) {
    super(id);
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.district = district;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.createdAt = new Date();
  }

  updateAddress(
    street?: string,
    number?: string,
    complement?: string,
    district?: string,
    city?: string,
    state?: string,
    postalCode?: string
  ) {
    this.street = street ?? this.street;
    this.number = number ?? this.number;
    this.complement = complement ?? this.complement;
    this.district = district ?? this.district;
    this.city = city ?? this.city;
    this.state = state ?? this.state;
    this.postalCode = postalCode ?? this.postalCode;
    this.updatedAt = new Date();
  }
}
