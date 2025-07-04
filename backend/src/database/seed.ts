import { DataSource } from "typeorm";
import { Category } from "../categories/category.entity";
import { Product } from "../products/product.entity";
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

const imagesByCategory = {
  living: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80"],
  bedroom: ["https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=800&q=80"],
  dining: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"],
};

async function createCategory(name: string, image: string) {
  const categoryRepo = AppDataSource.getRepository(Category);
  const category = categoryRepo.create({ name, image });
  return categoryRepo.save(category);
}

function getOrderedImages(categoryKey: keyof typeof imagesByCategory) {
  const imgs = imagesByCategory[categoryKey];
  const startIndex = Math.floor(Math.random() * imgs.length);
  return [...imgs.slice(startIndex), ...imgs.slice(0, startIndex)];
}

async function createProduct(category: Category, name: string, index: number) {
  const productRepo = AppDataSource.getRepository(Product);
  const chance = Math.random();

  let discount = false;
  let discountPercent: number | undefined = undefined;
  let isNew = false;

  if (chance < 0.4) {
    discount = true;
    discountPercent = parseFloat((Math.random() * 50 + 10).toFixed(2));
  } else if (chance < 0.8) {
    isNew = true;
  }

  const categoryKey = name.toLowerCase() as keyof typeof imagesByCategory;
  const images = getOrderedImages(categoryKey);

  const product = productRepo.create({
    title: `${name} Product ${index}`,
    price: parseFloat((Math.random() * 1000 + 100).toFixed(2)),
    images,
    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
    reviewCount: Math.floor(Math.random() * 100 + 1),
    description: "This is a beautifully designed product suitable for any modern environment. It combines aesthetics with durability.",
    sizes: ["L", "M", "S"],
    colors: ["#000000", "#ffffff", "#927653"],
    category: category,
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

      for (let i = 1; i <= 15; i++) {
        await createProduct(category, name, i);
      }
    }

    console.log("Seed completo com 3 categorias e 45 produtos!");
  } catch (err) {
    console.error("Erro no seed:", err);
  } finally {
    await AppDataSource.destroy();
  }
}

seed();
