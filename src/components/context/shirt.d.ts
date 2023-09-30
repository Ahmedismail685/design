//
//
//
export type shirt = {
  id: string;
  title: string;
  url: string;
  price: number;
  id: string;
  title: string;
  price: number;
  quantity: number;
  information?: string;
  police?: string;
  Favorite?: boolean;
  colors?: { available: boolean; color: Array<string> };
  size?: { available: boolean; size: Array<string> };
};
