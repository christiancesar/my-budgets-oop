import { Item } from "../entities/item.js";

type ItemFactoryParams = {
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  id?: string;
};

export class ItemFactory {
  static make(item?: ItemFactoryParams): Item {
    const name = item?.name ?? "Item Name";
    const description = item?.description ?? "Item Description";
    const price = item?.price ?? Math.random() * 100;
    const quantity = item?.quantity ?? Math.floor(Math.random() * 100);

    return new Item(name, description, price, quantity, item?.id);
  }
}
