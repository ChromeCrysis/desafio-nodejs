import { Controller, Get, Post, Body, Param, Put, UseGuards } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';
import { Movimentacao } from './movimentacao.entity';

@Controller('movimentacao')
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Get()
  findAll(): Promise<Movimentacao[]> {
    return this.movimentacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Movimentacao> {
    return this.movimentacaoService.findOne(+id);
  }

  @Post(':veiculoId/:estabelecimentoId/entrada')
  createEntrada(
    @Param('veiculoId') veiculoId: string,
    @Param('estabelecimentoId') estabelecimentoId: string,
    @Body() movimentacao: Movimentacao,
  ): Promise<Movimentacao> {
    return this.movimentacaoService.createEntrada(+veiculoId, +estabelecimentoId, movimentacao);
  }

  @Put(':id/saida')
  registrarSaida(@Param('id') id: string): Promise<Movimentacao> {
    return this.movimentacaoService.registrarSaida(+id);
  }

  @Get('sumario/:estabelecimentoId')
  gerarSumario(@Param('estabelecimentoId') estabelecimentoId: string): Promise<{ entradas: number; saidas: number }> {
    return this.movimentacaoService.gerarSumario(+estabelecimentoId);
  }

  @Get('sumario-por-hora/:estabelecimentoId')
  gerarSumarioPorHora(@Param('estabelecimentoId') estabelecimentoId: string): Promise<{ hora: number; entradas: number; saidas: number }[]> {
    return this.movimentacaoService.gerarSumarioPorHora(+estabelecimentoId);
  }

  @Get('relatorio/:estabelecimentoId')
  gerarRelatorio(@Param('estabelecimentoId') estabelecimentoId: string): Promise<Movimentacao[]> {
    return this.movimentacaoService.gerarRelatorio(+estabelecimentoId);
  }
}
