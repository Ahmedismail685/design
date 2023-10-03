export type Open = {
  openView: boolean;
  openCart: boolean;
};
export type item = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  url: string;
  total: number;
};

export type summary = {
  subtotal: number;
  deliver: number;
  country: string;
  total: number;
};

export type cart = {
  open: Open;
  items: Array<itemCartView>;
  summary: summary;
};
