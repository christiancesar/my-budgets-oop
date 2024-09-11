import { Entity } from "./entity.js";

export class Item extends Entity {
  private name: string;
  private description: string;
  private price: number;
  private quantity: number;
  private createdAt: Date;
  private updatedAt?: Date | null;

  constructor(
    name: string,
    description: string,
    price: number,
    quantity: number,
    id?: string
  ) {
    super(id);
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.createdAt = new Date();
  }

  updateItem(
    name?: string,
    description?: string,
    price?: number,
    quantity?: number
  ) {
    this.name = name ?? this.name;
    this.description = description ?? this.description;
    this.price = price ?? this.price;
    this.quantity = quantity ?? this.quantity;
    this.updatedAt = new Date();
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  getQuantity() {
    return this.quantity;
  }
}
