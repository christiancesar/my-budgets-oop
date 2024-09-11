import { Company } from "./company.js";
import { Entity } from "./entity.js";
import bcrypt from "bcrypt";
import { Profile } from "./profile.js";

export type Permissions = {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
};

export class User extends Entity {
  password: string;
  email: string;
  individualTaxNumber: string;
  companies: Company[];
  role: "admin" | "user";
  permissions: Permissions;
  profile?: Profile;
  createdAt: Date;
  updatedAt?: Date | null;

  constructor(
    password: string,
    email: string,
    phone: string,
    individualTaxNumber: string,
    companies: Company[],
    role: "admin" | "user",
    id?: string
  ) {
    super(id);
    this.password = bcrypt.hashSync(password, 10);
    this.email = email;
    this.individualTaxNumber = individualTaxNumber;
    this.role = role;
    this.permissions =
      role === "admin"
        ? { create: true, read: true, update: true, delete: true }
        : { create: true, read: true, update: false, delete: false };
    this.companies = [];
    this.profile = {} as Profile;
    this.createdAt = new Date();
  }

  addCompany(company: Company) {
    this.companies.push(company);
    this.updatedAt = new Date();
  }

  updateRoles(role: "admin" | "user") {
    this.role = role;
    this.permissions =
      role === "admin"
        ? { create: true, read: true, update: true, delete: true }
        : { create: true, read: true, update: false, delete: false };
    this.updatedAt = new Date();
  }

  updatePermissions(permissions: Permissions) {
    this.permissions = permissions;
    this.updatedAt = new Date();
  }

  updatePassword(current: string, npassword: string) {
    if (bcrypt.compareSync(current, this.password)) {
      this.password = bcrypt.hashSync(npassword, 10);
      this.updatedAt = new Date();
    } else {
      console.error("Current password is incorrect");
    }
  }
}
