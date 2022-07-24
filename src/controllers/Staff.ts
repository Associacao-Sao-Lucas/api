import { Get, Controller, Render, Post, Middleware } from "routing-controllers";
import { Drive, Employee, Staff } from "../logic";

@Controller("/colaboradores")
export class StaffController {
	private drive = new Drive();
	private staff = new Staff();

	@Get("/")
	@Render("staff")
	async read() {
		const [sa_staff, rt_staff, eq_staff] = await Promise.all(
			[
				"Colaboradores - São Lucas.txt",
				"Colaboradores - Residência Terapêutica.txt",
				"Colaboradores - Equoterapia.txt",
			].map((filename) => this.employees(filename))
		);

		return { sa_staff, rt_staff, eq_staff };
	}

	private async employees(filename: string): Promise<Employee[]> {
		return this.drive
			.file_content(filename)
			.then((file_content) => this.staff.parse(file_content));
	}
}
