import { Address } from "../entities/address.js";
import { Customer } from "../entities/customer.js";
import { AddressFactory } from "./adress-factory.js";

type CustomerFactoryParams = {
  firstName?: string;
  lastName?: string;
  phone?: string[];
  email?: string;
  individualTaxNumber?: string;
  address?: Address;
  id?: string;
};
export class CustomerFactory {
  static make(customer?: CustomerFactoryParams): Customer {
    const firstName = customer?.firstName ?? "Customer";
    const lastName = customer?.lastName ?? "Doe";
    const phone = customer?.phone ?? ["(00) 0000-0000"];
    const email = customer?.email ?? "customer.doe@example.com";
    const individualTaxNumber =
      customer?.individualTaxNumber ?? "123.456.789-00";
    const address = customer?.address ?? AddressFactory.make();

    return new Customer(
      firstName,
      lastName,
      phone,
      email,
      individualTaxNumber,
      address,
      customer?.id
    );
  }
}
