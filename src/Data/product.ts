import { Product, Category } from "../Types/product.ts";

// Strongly typed product list
export const products: Product[] = [
  {
    id: "1",
    name: "Red Apple",
    price: 4.99,
    image: "/apple.png",
    description: "Fresh and sweet red apples.",
    category: Category.FRUITS,
    brand: "FreshFarm",
  },
  {
    id: "2",
    name: "Banana",
    price: 3.0,
    image: "/banana.png",
    description: "Organic bananas rich in potassium.",
    category: Category.FRUITS,
    brand: "NatureGrow",
  },
  {
    id: "3",
    name: "Carrot",
    price: 2.5,
    image: "/carrot.png",
    description: "Crunchy and healthy carrots.",
    category: Category.VEGETABLES,
    brand: "GreenHarvest",
  },
];
