/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { User, UserDocument } from "./user.models";


@Injectable()
export class UserRespository{
  
    constructor(@InjectModel('user') private readonly userModel : Model<UserDocument>){}
async findOne(userFiltiredquery: FilterQuery<User>):Promise<User> {
    return this.userModel.findOne(userFiltiredquery);
}

async find(userFiltiredquery:FilterQuery<User>):Promise<User[]>{
    return this.userModel.find(userFiltiredquery);
}

async create(user:User):Promise<User>{
    const newUser= new this.userModel(user);
    return newUser.save();
}

async findOneAndUpdate(userFiltiredquery:FilterQuery<User>,user:Partial<User>):Promise<User>{
    return this.userModel.findOneAndUpdate(userFiltiredquery,user,{new:true})
}
}