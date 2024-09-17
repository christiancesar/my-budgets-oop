import { Budget } from "./entities/budget.js";
import { CompanyFactory } from "./factories/comapany-factory.js";
import { CustomerFactory } from "./factories/customer-factory.js";
import { ItemFactory } from "./factories/item-factory.js";
import { UserFactory } from "./factories/user-factory.js";
import { InMemoryItemsRepository } from "./repositories/in-memory-items-repository.js";

function main() {
  const user = UserFactory.make({});
  const company = CompanyFactory.make();

  user.addCompany(company);

  console.log("User: ", JSON.stringify(user, null, 2));

  //create items
  const inMemoryItemsRepository = new InMemoryItemsRepository();

  inMemoryItemsRepository.save(ItemFactory.make({ name: "Notebook Acer" }));
  inMemoryItemsRepository.save(ItemFactory.make({ name: "Notebook Dell" }));
  inMemoryItemsRepository.save(ItemFactory.make({ name: "Notebook Samsung" }));
  inMemoryItemsRepository.save(ItemFactory.make({ name: "Notebook Positivo" }));
  inMemoryItemsRepository.save(
    ItemFactory.make({ name: "Kit mouse e teclado sem fio" })
  );
  inMemoryItemsRepository.save(ItemFactory.make({ name: "Mouse Corsair" }));
  inMemoryItemsRepository.save(
    ItemFactory.make({ name: "Teclado Mecanico HyperX" })
  );
  inMemoryItemsRepository.save(
    ItemFactory.make({ name: "Monitor LG Widescreen 35'" })
  );
  inMemoryItemsRepository.save(
    ItemFactory.make({ name: "Water Cooler CoolerMaster Hidro" })
  );

  console.log(
    "Itens: ",
    JSON.stringify(inMemoryItemsRepository.getAll(), null, 2)
  );

  const customer = CustomerFactory.make();

  console.log("Customer: ", JSON.stringify(customer, null, 2));

  const budget = new Budget();
  budget.addCustomer(customer);
  budget.addItem(inMemoryItemsRepository.getAll()[0]);
  budget.applyDiscount("percent", 5);

  console.log("Budget: ", budget);
}

main();
