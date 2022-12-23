/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./user.controller";
import { UserSchema } from "./user.models";
import { UserRespository } from "./user.repository";
import { UserService } from "./user.services";


@Module({
    imports:[
        MongooseModule.forFeature([{name:"user", schema:UserSchema}])
    ],
    controllers:[UserController],
    providers:[UserRespository,UserService],
}
)

export class UserModule {}