import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Veiculo {
  @PrimaryGeneratedColumn()
  veiculoId: number;

  @Column({ length: 100, nullable: false })
  marca: string;

  @Column({ length: 100, nullable: false })
  modelo: string;

  @Column({ length: 50, nullable: false })
  cor: string;

  @Column({ length: 10, nullable: false, unique: true })
  placa: string;

  @Column({ length: 50, nullable: false })
  tipo: string;
}

