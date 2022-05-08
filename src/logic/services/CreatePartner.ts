import { Partner } from "../entities/Partner";
import { Repository } from "../repositories/Repository";

export class CreatePartner {
  constructor(private readonly repository: Repository<Partner>) { }
  
  async execute(partner: Partner): Promise<Partner> { 
    return await this.repository.create(partner);
  }
}