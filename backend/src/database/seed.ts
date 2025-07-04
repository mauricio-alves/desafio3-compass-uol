import { DataSource } from "typeorm";
import { Category } from "../categories/category.entity";
import { Product } from "../products/product.entity";
import productContent from "./product-content.json";
import * as dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Category, Product],
  synchronize: true,
});

const { imagesByCategory, titlesAndDescriptionsByCategory } = productContent;

function getRandomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getOrderedImages(categoryKey: keyof typeof imagesByCategory) {
  const imgs = imagesByCategory[categoryKey];
  const startIndex = Math.floor(Math.random() * imgs.length);
  return [...imgs.slice(startIndex), ...imgs.slice(0, startIndex)];
}

async function createCategory(name: string, image: string) {
  const categoryRepo = AppDataSource.getRepository(Category);
  const category = categoryRepo.create({ name, image });
  return categoryRepo.save(category);
}

async function createProduct(category: Category, name: string, index: number) {
  const productRepo = AppDataSource.getRepository(Product);
  const chance = Math.random();

  let discount = false;
  let discountPercent: number | undefined = undefined;
  let isNew = false;

  if (chance < 0.4) {
    discount = true;
    discountPercent = getRandomFromArray([30, 50]);
  } else if (chance < 0.8) {
    isNew = true;
  }

  const categoryKey = name.toLowerCase() as keyof typeof imagesByCategory;
  const images = getOrderedImages(categoryKey);
  const { titles, descriptions } = titlesAndDescriptionsByCategory[categoryKey];

  const product = productRepo.create({
    title: getRandomFromArray(titles),
    description: getRandomFromArray(descriptions),
    price: parseFloat((Math.random() * 1000 + 100).toFixed(2)),
    images,
    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
    reviewCount: Math.floor(Math.random() * 100 + 1),
    sizes: ["L", "M", "S"],
    colors: ["#000000", "#ffffff", "#927653"],
    category,
    discount,
    discountPercent,
    isNew,
  });

  return productRepo.save(product);
}

async function seed() {
  try {
    await AppDataSource.initialize();

    const categories = ["Dining", "Living", "Bedroom"] as const;

    for (const name of categories) {
      const key = name.toLowerCase() as keyof typeof imagesByCategory;
      const categoryImage = imagesByCategory[key][0];

      const category = await createCategory(name, categoryImage);

      for (let i = 1; i <= 45; i++) {
        await createProduct(category, name, i);
      }
    }

    console.log("Seed completo com 3 categorias e 135 produtos!");
  } catch (err) {
    console.error("Erro no seed:", err);
  } finally {
    await AppDataSource.destroy();
  }
}

seed();
