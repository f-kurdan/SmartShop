import { Module } from "@nestjs/common/decorators";
import { ProductsModule } from "./products/products.module";
import { ConfigModule } from "@nestjs/config";
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { SpecificationsModule } from './specifications/specifications.module';

@Module({
    imports: [ProductsModule, 
        ConfigModule.forRoot(), 
        CategoriesModule, 
        BrandsModule, 
        SpecificationsModule,
        ServeStaticModule.forRoot({rootPath: join(__dirname, '..', '/public'), serveRoot: '/public'}), 
    ]
})
export class AppModule {}