import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Veiculo } from './veiculo.entity';

@Injectable()
export class VeiculosService {
  constructor(
    @InjectRepository(Veiculo)
    private veiculoRepository: Repository<Veiculo>,
  ) {}

  async findAll(): Promise<Veiculo[]> {
    return this.veiculoRepository.find();
  }

  async findOne(veiculoId: number): Promise<Veiculo> {
    return this.veiculoRepository.findOne({where: {veiculoId}});
  }

  async create(veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculoRepository.save(veiculo);
  }

  async update(veiculoId: number, veiculo: Veiculo): Promise<Veiculo> {
    await this.veiculoRepository.update(veiculoId, veiculo);
    return this.veiculoRepository.findOne({where: {veiculoId}});
  }

  async remove(id: number): Promise<void> {
    await this.veiculoRepository.delete(id);
  }
}

