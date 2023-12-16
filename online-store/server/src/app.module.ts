import { Module } from "@nestjs/common/decorators";
import { ProductsController } from "./products/products.controller";

@Module({
    controllers: [ProductsController]
})
export class AppModule {}