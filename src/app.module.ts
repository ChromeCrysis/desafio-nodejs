import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { EstabelecimentosModule } from './estabelecimentos/estabelecimentos.module';
import { MovimentacaoModule } from './movimentacao/movimentacao.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'desafio',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    AuthModule,
    VeiculosModule,
    EstabelecimentosModule,
    MovimentacaoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }


