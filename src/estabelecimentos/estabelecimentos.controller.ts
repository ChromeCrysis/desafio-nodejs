// src/veiculos/veiculos.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstabelecimentosService } from './estabelecimentos.service';
import { Estabelecimento } from './estabelecimentos.entity';

@Controller('estabelecimentos')
export class EstabelecimentosController {
  constructor(private readonly estabelecimentosService: EstabelecimentosService) {}

  @Get()
  findAll(): Promise<Estabelecimento[]> {
    return this.estabelecimentosService.findAll();
  }

  @Get(':estabelecimentoId')
  findOne(@Param('estabelecimentoId') estabelecimentoId: string): Promise<Estabelecimento> {
    return this.estabelecimentosService.findOne(+estabelecimentoId);
  }

  @Post()
  create(@Body() estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    return this.estabelecimentosService.create(estabelecimento);
  }

  @Put(':estabelecimentoId')
  update(@Param('estabelecimentoId') estabelecimentoId: string, @Body() estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    return this.estabelecimentosService.update(+estabelecimentoId, estabelecimento);
  }

  @Delete(':estabelecimentoId')
  remove(@Param('estabelecimentoId') estabelecimentoId: string): Promise<void> {
    return this.estabelecimentosService.remove(+estabelecimentoId);
  }
}