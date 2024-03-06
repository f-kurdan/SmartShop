import { Module, HttpStatus } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import { ProductsModule } from "./products/products.module";
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { UsersModule } from "./users/users.module";
import { SpecificationsModule } from './specifications/specifications.module';
import { providePrismaClientExceptionFilter } from "nestjs-prisma";

@Module({
    imports: [
        ProductsModule,
        CategoriesModule,
        BrandsModule,
        SpecificationsModule,
        UsersModule,
        ConfigModule.forRoot(),
        ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', '/public'), serveRoot: '/public' }),
    ],
    providers: [providePrismaClientExceptionFilter({
        // Prisma Error Code: HTTP Status Response
        P2000: HttpStatus.BAD_REQUEST,
        P2002: HttpStatus.CONFLICT,
        P2025: HttpStatus.NOT_FOUND,
      })]
})
export class AppModule { }