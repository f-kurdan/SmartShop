import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaModule } from "nestjs-prisma";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { JwtStrategy } from "./strategy/jwt.strategy";

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    PrismaModule,
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '5m' },
    }),],
})
export default class AuthModule { }