import { Get, Controller, Render, Post, Middleware } from "routing-controllers";
import { Drive } from "../logic";

export type Employee = {
	name: string;
	job: string;
};
@Controller("/colaboradores")
export class StaffController {
	private drive = new Drive();

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
			.then((file_content) => this.parse_employees(file_content));
	}

	private parse_employees(file_content: string): Employee[] {
		const employees = file_content.split(/\n\n+/).map((e) => e.split("\n"));

		return employees.map((employee) => {
			const [name, job] = employee;
			return { name: name.split(": ")[1], job: job.split(": ")[1] };
		});
	}
}
