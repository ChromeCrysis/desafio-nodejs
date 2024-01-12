import { Controller, Get, Post, Body, Param, Put, UseGuards } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';
import { Movimentacao } from './movimentacao.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('movimentacao')
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Movimentacao[]> {
    return this.movimentacaoService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string): Promise<Movimentacao> {
    return this.movimentacaoService.findOne(+id);
  }

  @Post(':veiculoId/:estabelecimentoId/entrada')
  @UseGuards(JwtAuthGuard)
  createEntrada(
    @Param('veiculoId') veiculoId: string,
    @Param('estabelecimentoId') estabelecimentoId: string,
    @Body() movimentacao: Movimentacao,
  ): Promise<Movimentacao> {
    return this.movimentacaoService.createEntrada(+veiculoId, +estabelecimentoId, movimentacao);
  }

  @Put(':id/saida')
  @UseGuards(JwtAuthGuard)
  registrarSaida(@Param('id') id: string): Promise<Movimentacao> {
    return this.movimentacaoService.registrarSaida(+id);
  }

  @Get('sumario/:estabelecimentoId')
  @UseGuards(JwtAuthGuard)
  gerarSumario(@Param('estabelecimentoId') estabelecimentoId: string): Promise<{ entradas: number; saidas: number }> {
    return this.movimentacaoService.gerarSumario(+estabelecimentoId);
  }

  @Get('sumario-por-hora/:estabelecimentoId')
  @UseGuards(JwtAuthGuard)
  gerarSumarioPorHoraOrdenado(@Param('estabelecimentoId') estabelecimentoId: string): Promise<{ hora: number; entradas: number; saidas: number }[]> {
    return this.movimentacaoService.gerarSumarioPorHoraOrdenado(+estabelecimentoId);
  }

  @Get('relatorio/:estabelecimentoId')
  @UseGuards(JwtAuthGuard)
  gerarRelatorio(@Param('estabelecimentoId') estabelecimentoId: string): Promise<Movimentacao[]> {
    return this.movimentacaoService.gerarRelatorio(+estabelecimentoId);
  }
}
