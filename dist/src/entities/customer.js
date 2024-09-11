import { Entity } from "./entity.js";
export class Customer extends Entity {
    firstName;
    lastName;
    fullName;
    phone;
    email;
    individualTaxNumber;
    address;
    createdAt;
    updatedAt;
    constructor(firstName, lastName, phone, email, individualTaxNumber, address, id) {
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
    updateCustomer(firstName, lastName, phone, email, individualTaxNumber, address) {
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
