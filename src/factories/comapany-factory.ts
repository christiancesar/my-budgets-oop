import { Address } from "../entities/address.js";
import { Company } from "../entities/company.js";
import { AddressFactory } from "./adress-factory.js";

type CompanyFactoryParams = {
  name?: string;
  description?: string;
  email?: string;
  phones?: string[];
  stateRegistration?: string;
  employerIdentificationNumber?: string;
  address?: Address;
  id?: string;
};

export class CompanyFactory {
  static make(company?: CompanyFactoryParams): Company {
    const name = company?.name ?? "Company Name";
    const description = company?.description ?? "Company Description";
    const email = company?.email ?? "company@company.com.br";
    const phones = company?.phones ?? ["(00) 0000-0000"];
    const stateRegistration =
      company?.stateRegistration ?? "00.000.000/0001-00";
    const employerIdentificationNumber =
      company?.employerIdentificationNumber ?? "00.000.000";

    const address = company?.address ?? AddressFactory.make();
    return new Company(
      name,
      description,
      email,
      phones,
      stateRegistration,
      employerIdentificationNumber,
      address,
      company?.id
    );
  }
}
