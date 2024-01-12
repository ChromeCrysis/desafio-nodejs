import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { VeiculosService } from './veiculos.service';
import { Veiculo } from './veiculo.entity';

@Controller('veiculos')
export class VeiculosController {
  constructor(private readonly veiculosService: VeiculosService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Veiculo[]> {
    return this.veiculosService.findAll();
  }

  @Get(':veiculoId')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('veiculoId') veiculoId: string): Promise<Veiculo> {
    return this.veiculosService.findOne(+veiculoId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculosService.create(veiculo);
  }

  @Put(':veiculoId')
  @UseGuards(JwtAuthGuard)
  update(@Param('veiculoId') id: string, @Body() veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculosService.update(+id, veiculo);
  }

  @Delete(':veiculoId')
  @UseGuards(JwtAuthGuard)
  remove(@Param('veiculoId') id: string): Promise<void> {
    return this.veiculosService.remove(+id);
  }
}
