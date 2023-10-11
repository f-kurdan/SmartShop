import { Module } from "@nestjs/common/decorators";
import { UserModule } from "./users/users.module";

@Module({
    imports: [UserModule]
})
export class AppModule {}