export type Employee = {
	name: string;
	job: string;
};

export class Staff {
	parse(file_content: string): Employee[] {
		const employees = file_content.split(/\n\n+/).map((e) => e.split("\n"));

		return employees.map((employee) => {
			const [name, job] = employee;
			return { name: name.split(": ")[1], job: job.split(": ")[1] };
		});
	}
}
