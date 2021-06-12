import { SongsModule } from './songs/songs.module';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [
    SongsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: '../.env',
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
