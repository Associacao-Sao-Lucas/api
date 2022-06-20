import request from "supertest";
import app from "../../../src/admin/app";

const root = "/admin/colaboradores";

describe("Create", () => {
	it("[GET] should return the create staff member form", async () => {
		const { statusCode } = await request(app).get(`${root}/criar`);

		expect(statusCode).toBe(200);
	});

	it("[POST] should create one staff member", async () => {
		const response = await request(app)
			.post(`${root}/criar`)
			.field("name", "John Doe")
			.field("job", "Caretaker")
			.attach("resume", Buffer.from("Awesome resume"), {
				filename: "resume.pdf",
				contentType: "application/pdf",
			});

		expect(response.statusCode).toBe(302);
		expect(response.text).toBe(`Found. Redirecting to ${root}`);
	});
});

describe("Edit", () => {
	it("[GET] should return the edit staff member form", async () => {
		const { statusCode } = await request(app).get(`${root}/editar/1`);

		expect(statusCode).toBe(200);
	});

	it("[POST] should edit one existing staff member", async () => {
		const response = await request(app)
			.post(`${root}/editar/1`)
			.field("name", "John Doe")
			.field("job", "Director")
			.attach("resume", Buffer.from("Awesome resume"), {
				filename: "resume.pdf",
				contentType: "application/pdf",
			});

		expect(response.statusCode).toBe(302);
		expect(response.text).toBe(`Found. Redirecting to ${root}`);
	});

	it("[POST] should also work without an resume", async () => {
		const response = await request(app)
			.post(`${root}/editar/1`)
			.field("name", "John Doe")
			.field("job", "Director");

		expect(response.statusCode).toBe(302);
		expect(response.text).toBe(`Found. Redirecting to ${root}`);
	});
});
