import { Partner } from "../entities/Partner";
import { Repository } from "../repositories/Repository";

export class PartnersService {
  constructor(private readonly repository: Repository<Partner>) { }
  
  async create(partner: Omit<Partner, "id">): Promise<string> { 
    const created_partner = await this.repository.create(partner);
    return created_partner.id;
  }

  async delete(partner_id: string): Promise<void> { 
    return await this.repository.delete(partner_id);
  }

  async update(partner: Partner): Promise<string> { 
    const updated_partner = await this.repository.update(partner);
    return updated_partner.id;
  }

  async show(partner_id: string): Promise<Partner> { 
    return await this.repository.show(partner_id);
  }

  async index(): Promise<Partner[]> { 
    return await this.repository.index();
  }
}