//
//
//
export type shirt = {
  id: string;
  title: string;
  url: string;
  price: number;
  quantity: number;
  information?: string;
  police?: string;
  Favorite?: boolean;
  colors?: Array<string>;
  size?: Array<string>;
  quantity: number;
  total?: number;
};

export type Open = {
  openView: boolean;
  openCart: boolean;
};
export type item = {};

export type summary = {
  subtotal: number;
  deliver: number;
  country: string;
  total: number;
};

export type cart = {
  open: Open;
  items: Array<shirt>;
  summary: summary;
};
