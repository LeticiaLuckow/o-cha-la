export type Product = {
  image: string;
  name: string;
  fakePrice: number;
  price: number;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

export type ObjectProduct = { id: number; attributes: Product };
