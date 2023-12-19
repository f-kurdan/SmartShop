import { Module } from "@nestjs/common/decorators";
import { ProductsModule } from "./products/products.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ProductsModule, ConfigModule.forRoot()]
})
export class AppModule {}