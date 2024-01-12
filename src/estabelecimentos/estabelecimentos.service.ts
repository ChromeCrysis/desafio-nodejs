import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estabelecimento } from './estabelecimentos.entity';

@Injectable()
export class EstabelecimentosService {
    constructor(
      @InjectRepository(Estabelecimento)
      private estabelecimentoRespository: Repository<Estabelecimento>,
    ) {}
    
    async findAll(): Promise<Estabelecimento[]>{
        return this.estabelecimentoRespository.find();
    }

    async findOne(estabelecimentoId: number): Promise<Estabelecimento>{
        return this.estabelecimentoRespository.findOne({where: {estabelecimentoId}});
    }
    
    async create(estabelecimento: Estabelecimento): Promise<Estabelecimento>{
        return this.estabelecimentoRespository.save(estabelecimento);
    }

    async update(estabelecimentoId: number, estabelecimento: Estabelecimento): Promise<Estabelecimento>{
        await this.estabelecimentoRespository.update(estabelecimentoId, estabelecimento);
        return this.estabelecimentoRespository.findOne({where: {estabelecimentoId}});
    }

    async remove(id: number): Promise<void>{
        await this.estabelecimentoRespository.delete(id); 
    }
}
