import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Estabelecimento {
  @PrimaryGeneratedColumn()
  estabelecimentoId: number;

  @Column({ length: 100, nullable: false })
  nome: string;

  @Column({ length: 20, nullable: false })
  cnpj: string;

  @Column({ length: 100, nullable: false })
  endereco: string;

  @Column({ length: 20, nullable: false, unique: true })
  telefone: string;

  @Column({nullable: false })
  qtd_vagas_moto: number;

  @Column({nullable: false })
  qtd_vagas_carro: number;
}