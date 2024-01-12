import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, IsNull } from 'typeorm';
import { Movimentacao } from './movimentacao.entity';
import { Veiculo } from '../veiculos/veiculo.entity';
import { Estabelecimento } from '../estabelecimentos/estabelecimentos.entity';


@Injectable()
export class MovimentacaoService {
  constructor(
    @InjectRepository(Movimentacao)
    private readonly movimentacaoRepository: Repository<Movimentacao>,
    @InjectRepository(Veiculo)
    private readonly veiculoRepository: Repository<Veiculo>,
    @InjectRepository(Estabelecimento)
    private readonly estabelecimentoRepository: Repository<Estabelecimento>,
  ) { }

  findAll(): Promise<Movimentacao[]> {
    return this.movimentacaoRepository.find({ relations: ['veiculo', 'estabelecimento'] });
  }

  findOne(id: number): Promise<Movimentacao> {
    return this.movimentacaoRepository.findOne({
      where: { id }, relations: ['veiculo', 'estabelecimento']
    });
  }

  async createEntrada(veiculoId: number, estabelecimentoId: number, movimentacao: Movimentacao): Promise<Movimentacao> {
    const veiculo = await this.veiculoRepository.findOne({ where: { veiculoId } });
    const estabelecimento = await this.estabelecimentoRepository.findOne({ where: { estabelecimentoId } });

    if (!veiculo || !estabelecimento) {
      throw new Error('Veículo ou Estabelecimento não encontrado');
    }

    movimentacao.veiculo = veiculo;
    movimentacao.estabelecimento = estabelecimento;
    movimentacao.entrada = new Date();

    return this.movimentacaoRepository.save(movimentacao);
  }

  async registrarSaida(id: number): Promise<Movimentacao> {
    const movimentacao = await this.movimentacaoRepository.findOne({ where: { id } });

    if (!movimentacao) {
      throw new Error('Movimentação não encontrada');
    }

    movimentacao.saida = new Date();

    return this.movimentacaoRepository.save(movimentacao);
  }

  async gerarSumario(estabelecimentoId: number): Promise<{ entradas: number; saidas: number }> {
    const sumario = await this.movimentacaoRepository
      .createQueryBuilder('movimentacao')
      .select('COUNT(CASE WHEN movimentacao.saida IS NULL THEN 1 END)', 'entradas')
      .addSelect('COUNT(CASE WHEN movimentacao.saida IS NOT NULL THEN 1 END)', 'saidas')
      .where('movimentacao.estabelecimentoId = :estabelecimentoId', { estabelecimentoId })
      .getRawOne();

    return { entradas: +sumario.entradas, saidas: +sumario.saidas };
  }

  async gerarSumarioPorHoraOrdenado(estabelecimentoId: number): Promise<{ hora: number; entradas: number; saidas: number }[]> {
    const result = await this.movimentacaoRepository
      .createQueryBuilder('movimentacao')
      .select('HOUR(movimentacao.entrada) as hora')
      .addSelect('COUNT(CASE WHEN movimentacao.saida IS NULL THEN 1 END) as entradas')
      .addSelect('COUNT(CASE WHEN movimentacao.saida IS NOT NULL THEN 1 END) as saidas')
      .where('movimentacao.estabelecimentoId = :estabelecimentoId', { estabelecimentoId })
      .groupBy('hora')
      .orderBy('hora', 'ASC')
      .getRawMany();

    return result.map(({ hora, entradas, saidas }) => ({ hora, entradas: +entradas, saidas: +saidas }));
    }

  async gerarRelatorio(estabelecimentoId: number): Promise<Movimentacao[]> {
    return this.movimentacaoRepository.find({
      where: { estabelecimento: { estabelecimentoId: estabelecimentoId } },
      relations: ['veiculo'],
    });
  }
}
