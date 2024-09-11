import { Entity } from "./entity.js";
export class Profile extends Entity {
    firstName;
    lastName;
    fullName;
    phone;
    individualTaxNumber;
    avatar;
    createdAt;
    updatedAt;
    constructor(firstName, lastName, phone, individualTaxNumber, id) {
        super(id);
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.phone = phone;
        this.individualTaxNumber = individualTaxNumber;
        this.createdAt = new Date();
    }
    updateProfile(firstName, lastName, phone, individualTaxNumber, avatar) {
        this.firstName = firstName ?? this.firstName;
        this.lastName = lastName ?? this.lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.phone = phone ?? this.phone;
        this.individualTaxNumber = individualTaxNumber ?? this.individualTaxNumber;
        this.avatar = avatar ?? this.avatar;
        this.updatedAt = new Date();
    }
}
