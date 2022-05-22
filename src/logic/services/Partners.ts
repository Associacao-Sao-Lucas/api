import { Partner } from "../entities/Partner";
import { Repository } from "../repositories";
import { FileStorage, InFile } from "../providers";

export class PartnersService {
  constructor(
    private readonly fileStorage: FileStorage,
    private readonly repository: Repository<Partner>
  ) {}
  
  async create(
    partner: Omit<Partner, "id" | "logo">,
    logo: InFile
    ): Promise<Partner> { 
    const stored_logo = await this.fileStorage.store(logo);

    const new_partner = {
        ...partner,
        logo: stored_logo.id
    };

    return await this.repository.create(new_partner);
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