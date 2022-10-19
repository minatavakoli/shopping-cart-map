export interface OrderStoreTypes {
  orders: Product[];
  buyProduct: (data: Product) => void;
}

export interface Product {
  title: string;
  price: number;
  image: string;
  location?: { lat: number; lng: number };
}
