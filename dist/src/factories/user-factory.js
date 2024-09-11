import { faker } from "@faker-js/faker";
export class UserFactory {
    static make(user) {
        const password = user.password ?? "password";
        const email = user.email ?? faker.internet.email();
        const phone = [faker.phone.phoneNumber()];
        // return new User(password, email, phone, individualTaxNumber, companies, role, user.id);
    }
}
