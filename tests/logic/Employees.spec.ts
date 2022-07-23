import { Staff } from "../../src/logic";

describe("Staff", () => {
	const staff = new Staff();

	it("should parse the staff into Employees", () => {
		const file_content = [
			"Nome: Rafael Silva",
			"Cargo: Psicologo\n",
			"Nome: Thiago Pires",
			"Cargo: Diretor",
		].join("\n");

		expect(staff.parse(file_content)).toEqual([
			{
				name: "Rafael Silva",
				job: "Psicologo",
			},
			{
				name: "Thiago Pires",
				job: "Diretor",
			},
		]);
	});
});
