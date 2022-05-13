import { StaffMember } from "../entities/StaffMember";
import { Repository } from "../repositories/Repository";

export class StaffService {
    constructor(private readonly repository: Repository<StaffMember>) {}
    
    async create(staff_member: Omit<StaffMember, "id">): Promise<String> {
        const created_staff_member = await this.repository.create(staff_member);
        return created_staff_member.id;
    }

    async delete(staff_member_id: string): Promise<void> {
       return await this.repository.delete(staff_member_id);
    }


    async update(staff_member: StaffMember): Promise<string> {
        const staff_membe_id = this.repository.update(staff_member)
        return staff_member.id;

    }

    async show(staff_member_id: string): Promise<StaffMember> {
      return await this.repository.show(staff_member_id);

    } 

    async index(): Promise<StaffMember[]> {
        return await this.repository.index();
    }

}
