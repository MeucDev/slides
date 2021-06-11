import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get<number>('DATABASE_PORT', 5432),
        username: configService.get('DATABASE_USERNAME', 'slides'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME', 'slides'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
