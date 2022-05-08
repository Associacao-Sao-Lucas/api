import { Partner } from "../entities/Partner";
import { Repository } from "../repositories/Repository";

export class PartnersService {
  constructor(private readonly repository: Repository<Partner>) { }
  
  async create(partner: Omit<Partner, "id">): Promise<Partner> { 
    return await this.repository.create(partner);
  }

  async delete(partner_id: string): Promise<void> { 
    return await this.repository.delete(partner_id);
  }

  async update(partner: Partner): Promise<Partner> { 
    return await this.repository.update(partner);
  }
}