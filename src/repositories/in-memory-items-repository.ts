import { Item } from "../entities/item.js";

export class InMemoryItemsRepository {
  private items: Item[] = [];

  getAll(): Item[] {
    return this.items;
  }

  save(item: Item) {
    this.items.push(item);
  }

  findById(itemId: string): Item | null {
    return this.items.find((item) => item.getId() === itemId) ?? null;
  }
}
