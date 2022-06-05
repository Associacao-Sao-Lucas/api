import { StaffMember } from "../entities/StaffMember";
import { FileStorage, InFile } from "../providers/FileStorage";
import { Repository } from "../repositories/Repository";

export class StaffService {
	constructor(
		private readonly fileStorage: FileStorage,
		private readonly repository: Repository<StaffMember>
	) {}

	async create(
		staff_member: Omit<StaffMember, "id" | "resume">,
		resume: InFile
	): Promise<StaffMember> {
		const stored_resume = await this.fileStorage.store(resume);

		const new_staff_member = {
			...staff_member,
			resume: stored_resume.id,
		};

		return await this.repository.create(new_staff_member);
	}

	async delete(staff_member_id: string): Promise<void> {
		return await this.repository.delete(staff_member_id);
	}

	async update(staff_member: Omit<StaffMember, "resume">): Promise<string> {
		const staff_member_id = this.repository.update(staff_member as StaffMember);
		return staff_member.id;
	}

	async show(staff_member_id: string): Promise<StaffMember> {
		return await this.repository.show(staff_member_id);
	}

	async index(): Promise<StaffMember[]> {
		return await this.repository.index();
	}
}
