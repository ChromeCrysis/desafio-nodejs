// src/veiculos/veiculos.controller.ts

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { Veiculo } from './veiculo.entity';

@Controller('veiculos')
export class VeiculosController {
  constructor(private readonly veiculosService: VeiculosService) {}

  @Get()
  findAll(): Promise<Veiculo[]> {
    return this.veiculosService.findAll();
  }

  @Get(':veiculoId')
  findOne(@Param('veiculoId') veiculoId: string): Promise<Veiculo> {
    return this.veiculosService.findOne(+veiculoId);
  }

  @Post()
  create(@Body() veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculosService.create(veiculo);
  }

  @Put(':veiculoId')
  update(@Param('veiculoId') id: string, @Body() veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculosService.update(+id, veiculo);
  }

  @Delete(':veiculoId')
  remove(@Param('veiculoId') id: string): Promise<void> {
    return this.veiculosService.remove(+id);
  }
}
