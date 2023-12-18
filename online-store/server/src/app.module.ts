import { Module } from "@nestjs/common/decorators";
import { ProductsModule } from "./products/products.module";

@Module({
    imports: [ProductsModule]
})
export class AppModule {}