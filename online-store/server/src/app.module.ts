import { Module } from "@nestjs/common/decorators";
import { ProductsModule } from "./products/products.module";
import { ConfigModule } from "@nestjs/config";
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';

@Module({
    imports: [ProductsModule, ConfigModule.forRoot(), CategoriesModule, BrandsModule]
})
export class AppModule {}