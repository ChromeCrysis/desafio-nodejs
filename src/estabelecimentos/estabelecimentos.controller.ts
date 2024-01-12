import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EstabelecimentosService } from './estabelecimentos.service';
import { Estabelecimento } from './estabelecimentos.entity';

@Controller('estabelecimentos')
export class EstabelecimentosController {
  constructor(private readonly estabelecimentosService: EstabelecimentosService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Estabelecimento[]> {
    return this.estabelecimentosService.findAll();
  }

  @Get(':estabelecimentoId')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('estabelecimentoId') estabelecimentoId: string): Promise<Estabelecimento> {
    return this.estabelecimentosService.findOne(+estabelecimentoId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    return this.estabelecimentosService.create(estabelecimento);
  }

  @Put(':estabelecimentoId')
  @UseGuards(JwtAuthGuard)
  update(@Param('estabelecimentoId') estabelecimentoId: string, @Body() estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    return this.estabelecimentosService.update(+estabelecimentoId, estabelecimento);
  }

  @Delete(':estabelecimentoId')
  @UseGuards(JwtAuthGuard)
  remove(@Param('estabelecimentoId') estabelecimentoId: string): Promise<void> {
    return this.estabelecimentosService.remove(+estabelecimentoId);
  }
}