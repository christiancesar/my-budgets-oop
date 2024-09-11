import { Entity } from "./entity.js";
export class Company extends Entity {
    name;
    description;
    email;
    phones;
    stateRegistration;
    employerIdentificationNumber;
    address;
    createdAt;
    updatedAt;
    constructor(name, description, email, phones, stateRegistration, employerIdentificationNumber, address, id) {
        super(id);
        this.name = name;
        this.description = description;
        this.email = email;
        this.phones = phones;
        this.stateRegistration = stateRegistration;
        this.employerIdentificationNumber = employerIdentificationNumber;
        this.createdAt = new Date();
    }
    updateCompany(name, description, email, phones, stateRegistration, employerIdentificationNumber, id) {
        this.name = name ?? this.name;
        this.description = description ?? this.description;
        this.email = email ?? this.email;
        this.phones = phones ?? this.phones;
        this.stateRegistration = stateRegistration ?? this.stateRegistration;
        this.employerIdentificationNumber =
            employerIdentificationNumber ?? this.employerIdentificationNumber;
        this.updatedAt = new Date();
    }
    updateAddress(address) {
        this.address = address;
        this.updatedAt = new Date();
    }
}
