import { Company } from "../entities/company.js";
import { Profile } from "../entities/profile.js";
import { User } from "../entities/user.js";

type UserFactoryParams = {
  id?: string;
  password?: string;
  email?: string;
  role?: "admin" | "user";
  permissions?: Permissions;
  companies?: Company[];
  profile?: Profile;
};

export class UserFactory {
  static make(user?: UserFactoryParams) {
    const password = user?.password ?? "password";
    const email = user?.email ?? "jhoe.doe@example.con";
    const role = user?.role ?? "user";
    const companies = user?.companies ?? [];
    const permissions = user?.permissions ?? {
      create: true,
      read: true,
      update: true,
      delete: true,
    };
    const individualTaxNumber = "123.456.789-00";

    return new User(
      password,
      email,
      individualTaxNumber,
      companies,
      role,
      user?.id
    );
  }
}
