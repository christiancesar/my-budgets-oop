import { Address } from "../entities/address.js";

type AddressFactoryParams = {
  street?: string;
  number?: string;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  id?: string;
};
export class AddressFactory {
  static make(address?: AddressFactoryParams): Address {
    const street = address?.street ?? "Street Name";
    const number = address?.number ?? "0";
    const complement = address?.complement ?? "Complement";
    const district = address?.district ?? "District";
    const city = address?.city ?? "City";
    const state = address?.state ?? "State";
    const postalCode = address?.postalCode ?? "00000-000";

    return new Address(
      street,
      number,
      complement,
      district,
      city,
      state,
      postalCode,
      address?.id
    );
  }
}
