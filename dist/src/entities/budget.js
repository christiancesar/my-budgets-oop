import { Entity } from "./entity.js";
class Trolley extends Entity {
    itemId;
    name;
    description;
    unit_amount;
    gross_amount;
    net_amount;
    discount_amount;
    discount_percent;
    quantity;
    constructor(itemId, name, unit_amount, quantity, description, id) {
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
    shortId;
    saller;
    customer;
    deliverTo;
    status;
    discount_amout;
    discount_percent;
    gross_amount;
    net_amount;
    description;
    items;
    createdAt;
    updatedAt;
    constructor(id) {
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
    addItem(item) {
        if (item.getQuantity() > 0) {
            const trolleyItem = new Trolley(item.getId(), item.getName(), item.getPrice(), item.getQuantity(), item.getDescription());
            this.calculateBudget();
        }
        else {
            console.error("Item quantity must be greater than 0");
        }
    }
    removeItem(itemId) {
        this.items = this.items.filter((item) => item.getId() !== itemId);
        this.calculateBudget();
    }
    applyDiscount(type, value) {
        if (type === "percent") {
            this.discount_percent = value;
        }
        else {
            this.discount_amout = value;
        }
        this.calculateBudget();
    }
    addCustomer(customer) {
        this.customer = customer;
        this.deliverTo = customer.getAddress();
    }
    addOrUpdateDeliverAddress(address) {
        this.deliverTo = address;
    }
    calculateBudget() {
        this.gross_amount = this.items.reduce((acc, item) => acc + item.gross_amount, 0);
        if (this.discount_percent > 0) {
            this.discount_amout = this.gross_amount * (this.discount_percent / 100);
        }
        else {
            this.discount_percent = this.discount_amout / this.gross_amount;
        }
        this.net_amount = this.gross_amount - this.discount_amout;
    }
}
