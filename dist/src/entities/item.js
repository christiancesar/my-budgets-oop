import { Entity } from "./entity.js";
export class Item extends Entity {
    name;
    description;
    price;
    quantity;
    createdAt;
    updatedAt;
    constructor(name, description, price, quantity, id) {
        super(id);
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.createdAt = new Date();
    }
    updateItem(name, description, price, quantity) {
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
