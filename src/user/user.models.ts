/* eslint-disable prettier/prettier */

import { Schema, Prop,SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument=User & Document;

@Schema()
export class User {
  @Prop()
  userId:string
  @Prop()
  username: string;
  @Prop()
  email: string;
  @Prop()
  age:number;
  @Prop([String])
  favouriteFood:string[];
  @Prop({default: Date.now})
  createdDate: Date;
}

export const UserSchema=SchemaFactory.createForClass(User);
