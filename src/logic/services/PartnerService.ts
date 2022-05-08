import { Partner } from "../entities/Partner";
import { Repository } from "../repositories/Repository";

export class PartnerService {
  constructor(private readonly repository: Repository<Partner>) { }
  
  async create(partner: Partner): Promise<Partner> { 
    return await this.repository.create(partner);
  }
}