import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Veiculo } from '../veiculos/veiculo.entity';
import { Estabelecimento } from '../estabelecimentos/estabelecimentos.entity';

@Entity()
export class Movimentacao {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Veiculo, { eager: true, cascade: true })
  @JoinColumn({ name: 'veiculoId' })
  veiculo: Veiculo;

  @ManyToOne(() => Estabelecimento, { eager: true, cascade: true })
  @JoinColumn({ name: 'estabelecimentoId' })
  estabelecimento: Estabelecimento;

  @Column({ type: 'datetime', nullable: false })
  entrada: Date;

  @Column({ type: 'datetime', nullable: true })
  saida: Date;
}
