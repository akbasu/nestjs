import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {config} from './config/config';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb+srv://akbasu:<password>@cluster0.0ufys7f.mongodb.net/?retryWrites=true&w=majority'),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    //https://github.com/learnwithnyoman/basic-essentials-nestjs-backenda-api/blob/main/src/app.module.ts
    //https://dev.to/nyomansunima/create-nestjs-api-using-typescript-mongodb-docker-docker-compose-29k9
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    NotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
