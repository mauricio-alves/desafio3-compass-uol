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

async function createCategory(name: string) {
  const categoryRepo = AppDataSource.getRepository(Category);
  const category = categoryRepo.create({ name });
  return categoryRepo.save(category);
}

async function createProduct(category: Category, name: string, index: number) {
  const productRepo = AppDataSource.getRepository(Product);

  const product = productRepo.create({
    title: `${name} Product ${index}`,
    price: parseFloat((Math.random() * 1000 + 100).toFixed(2)),
    images: [`https://source.unsplash.com/featured/?${name.toLowerCase()}-${index}`, `https://source.unsplash.com/featured/?${name.toLowerCase()}-sofa`],
    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), 
    reviewCount: Math.floor(Math.random() * 100 + 1),
    description: "This is a beautifully designed product suitable for any modern environment. It combines aesthetics with durability.",
    sizes: ["L", "M", "S"],
    colors: ["#000000", "#ffffff", "#927653"],
    category: category,
  });

  return productRepo.save(product);
}

async function seed() {
  try {
    await AppDataSource.initialize();

    const categories = ["Dining", "Living", "Bedroom"];

    for (const name of categories) {
      const category = await createCategory(name);

      for (let i = 1; i <= 15; i++) {
        await createProduct(category, name, i);
      }
    }

    console.log("✅ Seed completo com 3 categorias e 45 produtos!");
  } catch (err) {
    console.error("Erro no seed:", err);
  } finally {
    await AppDataSource.destroy();
  }
}

seed();
