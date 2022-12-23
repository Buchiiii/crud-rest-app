/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user/user.models';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://crudadmin:crud@crud-rest-app.jd5o39m.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{name:'user', schema:UserSchema}]),UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
