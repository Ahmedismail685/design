import { item } from "./order/order.t";
import { shirt } from "./shirt";

export const items: Array<shirt> = [
  {
    id: "0001",
    price: 80,
    url: "1",
    title: "t - shirt",
    quantity: 1,
    size: ["small", "medium"],
    colors: ["black", "gray"],
    information: "hi this is a beast seller app",
    police: "red and yellow is the beast color ever",
  },
  {
    id: "0002",
    price: 542,
    url: "2",
    title: "home",
    quantity: 1,
    colors: ["black", "gray"],
    police: "red and yellow is the beast color ever",
  },
  {
    id: "0003",
    price: 986,
    url: "3",
    title: "on the last",
    quantity: 1,
    size: ["small", "medium"],
    information: "hi this is a beast seller app hone app",
  },
  { id: "0004", price: 1983, url: "2", title: "jenny", quantity: 1 },
];

export const orders: Array<item> = [];
