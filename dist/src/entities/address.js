import { Entity } from "./entity.js";
export class Address extends Entity {
    street;
    number;
    complement;
    district;
    city;
    state;
    postalCode; // pattern: /^\d{5}-?\d{3}$/
    createdAt;
    updatedAt;
    constructor(street, number, complement, district, city, state, postalCode, id) {
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
    updateAddress(street, number, complement, district, city, state, postalCode) {
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
