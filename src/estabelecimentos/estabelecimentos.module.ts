import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estabelecimento } from './estabelecimentos.entity';
import { EstabelecimentosService } from './estabelecimentos.service';
import { EstabelecimentosController } from './estabelecimentos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Estabelecimento])],
  providers: [EstabelecimentosService],
  controllers: [EstabelecimentosController]
})
export class EstabelecimentosModule {}
