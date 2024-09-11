import { Address } from "./address.js";
import { Customer } from "./customer.js";
import { Entity } from "./entity.js";
import { Item } from "./item.js";
import { User } from "./user.js";

class Trolley extends Entity {
  itemId: string;
  name: string;
  description?: string;
  unit_amount: number;
  gross_amount: number;
  net_amount: number;
  discount_amount: number;
  discount_percent: number;
  quantity: number;

  constructor(
    itemId: string,
    name: string,
    unit_amount: number,
    quantity: number,
    description?: string,
    id?: string
  ) {
    super(id);
    this.itemId = itemId;
    this.name = name;
    this.description = description ?? "";
    this.unit_amount = unit_amount;
    this.quantity = quantity;
    this.gross_amount = unit_amount * quantity;
    this.net_amount = 0;
    this.discount_amount = 0;
    this.discount_percent = 0;
  }
}

export class Budget extends Entity {
  private shortId: string;
  private saller?: User;
  private customer?: Customer;
  private deliverTo?: Address | null;
  private status: "budget" | "sold" | "canceled";
  private discount_amout: number;
  private discount_percent: number;
  private gross_amount: number;
  private net_amount: number;
  private description?: string;
  private items: Trolley[];
  private createdAt: Date;
  private updatedAt?: Date | null;

  constructor(id?: string) {
    super(id);
    this.shortId = this.getId().slice(0, 8).toLocaleUpperCase();
    this.items = [];
    this.status = "budget";
    this.discount_amout = 0;
    this.discount_percent = 0;
    this.gross_amount = 0;
    this.net_amount = 0;
    this.createdAt = new Date();
  }

  addItem(item: Item) {
    if (item.getQuantity() > 0) {
      const trolleyItem = new Trolley(
        item.getId(),
        item.getName(),
        item.getPrice(),
        item.getQuantity(),
        item.getDescription()
      );

      this.calculateBudget();
    } else {
      console.error("Item quantity must be greater than 0");
    }
  }

  removeItem(itemId: string) {
    this.items = this.items.filter((item) => item.getId() !== itemId);
    this.calculateBudget();
  }

  applyDiscount(type: "percent" | "amount", value: number) {
    if (type === "percent") {
      this.discount_percent = value;
    } else {
      this.discount_amout = value;
    }
    this.calculateBudget();
  }

  addCustomer(customer: Customer) {
    this.customer = customer;
    this.deliverTo = customer.getAddress();
  }

  addOrUpdateDeliverAddress(address: Address) {
    this.deliverTo = address;
  }

  private calculateBudget() {
    this.gross_amount = this.items.reduce(
      (acc, item) => acc + item.gross_amount,
      0
    );

    if (this.discount_percent > 0) {
      this.discount_amout = this.gross_amount * (this.discount_percent / 100);
    } else {
      this.discount_percent = this.discount_amout / this.gross_amount;
    }

    this.net_amount = this.gross_amount - this.discount_amout;
  }
}
