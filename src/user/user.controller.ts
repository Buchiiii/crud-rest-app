/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreatedUserDto } from "./dto/created-user.dto";
import { UserUpdateDto } from "./dto/updated-user.dto";
import { User } from "./user.models";
import { UserService } from "./user.services";




@Controller('users')
export class UserController{
    constructor(private readonly userController:UserService){}

@Get(':userId')
async getUser(@Param('userId') userId:string):Promise<User>{
    return this.userController.getUserById(userId)
}

@Get()
async getUsers():Promise<User[]>{
    return this.userController.getUsers()
}

@Post()
async createUser(@Body() userDetails:CreatedUserDto):Promise<User>{
    return this.userController.create(userDetails.email,userDetails.username,userDetails.age,userDetails.favouriteFood);
}

@Patch(':userId')
async updateUser(@Param('userId') userId:string,@Body() userUpdate: UserUpdateDto):Promise<User>{
    return this.userController.findAndUpdate(userId,userUpdate)
}
}