export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
  images: string[];
};

export type Filters = {
    title: string;
    minPrice: number;
    maxPrice: number;
    category: string;
}