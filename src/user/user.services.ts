/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { User } from "./user.models";
import { UserRespository } from "./user.repository";
import {v4 as uuidv4} from "uuid";
import { UserUpdateDto } from "./dto/updated-user.dto";


@Injectable()
export class UserService{
    constructor(private readonly userService : UserRespository){}

    async getUsers():Promise<User[]>{
        return this.userService.find({})
    }

    async getUserById(userId:string):Promise<User>{
        return this.userService.findOne({userId})
    }

    async create(email:string,username:string,age:number,favouriteFood:string[]):Promise<User>{
        return this.userService.create({
            userId: uuidv4(),
            email,
            username,
            age,
            favouriteFood,
            createdDate: undefined
        })
    }

    async findAndUpdate(userId:string,userUpdates:UserUpdateDto):Promise<User>{
        return this.userService.findOneAndUpdate({userId},userUpdates)
    }
}