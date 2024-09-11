import { Entity } from "./entity.js";
import bcrypt from "bcrypt";
export class User extends Entity {
    password;
    email;
    companies;
    role;
    permissions;
    profile;
    createdAt;
    updatedAt;
    constructor(password, email, phone, individualTaxNumber, companies, role, id) {
        super(id);
        this.password = bcrypt.hashSync(password, 10);
        this.email = email;
        this.role = role;
        this.permissions =
            role === "admin"
                ? { create: true, read: true, update: true, delete: true }
                : { create: true, read: true, update: false, delete: false };
        this.companies = [];
        this.profile = {};
        this.createdAt = new Date();
    }
    addCompany(company) {
        this.companies.push(company);
        this.updatedAt = new Date();
    }
    updateRoles(role) {
        this.role = role;
        this.permissions =
            role === "admin"
                ? { create: true, read: true, update: true, delete: true }
                : { create: true, read: true, update: false, delete: false };
        this.updatedAt = new Date();
    }
    updatePermissions(permissions) {
        this.permissions = permissions;
        this.updatedAt = new Date();
    }
    updatePassword(current, npassword) {
        if (bcrypt.compareSync(current, this.password)) {
            this.password = bcrypt.hashSync(npassword, 10);
            this.updatedAt = new Date();
        }
        else {
            console.error("Current password is incorrect");
        }
    }
}
