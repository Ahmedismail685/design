export type order = {
  items: Array<item>;
  open: boolean;
  subtotal: number;
};
export type item = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  url: string;
};
