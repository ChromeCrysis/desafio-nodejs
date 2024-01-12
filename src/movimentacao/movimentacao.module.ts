import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimentacao } from './movimentacao.entity';
import { Veiculo } from '../veiculos/veiculo.entity';
import { MovimentacaoController } from './movimentacao.controller';
import { MovimentacaoService } from './movimentacao.service';
import { VeiculosService } from 'src/veiculos/veiculos.service';
import { Estabelecimento } from 'src/estabelecimentos/estabelecimentos.entity';
import { EstabelecimentosService } from 'src/estabelecimentos/estabelecimentos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movimentacao, Veiculo, Estabelecimento])],
  providers: [MovimentacaoService, VeiculosService, EstabelecimentosService],
  controllers: [MovimentacaoController]
})
export class MovimentacaoModule {}
