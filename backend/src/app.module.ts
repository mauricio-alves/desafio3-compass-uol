import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { DatabaseModule } from "./database/database.module";
import { ProductsModule } from "./products/product.module";
import { CategoriesModule } from "./categories/category.module";

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, ProductsModule, CategoriesModule],
})
export class AppModule {}
