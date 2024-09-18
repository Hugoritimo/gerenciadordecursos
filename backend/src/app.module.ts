/* eslint-disable prettier/prettier */
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CursosModule,
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('vou beber uma coca se rodar de primeira.');
  }
}
