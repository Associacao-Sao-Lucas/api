import request from "supertest";
import app from "../../../src/admin/app";

const root = "/admin/colaboradores";

describe("Staff", () => {
	it("should return the create staff member form", async () => {
		const { statusCode } = await request(app).get(`${root}/criar`);

		expect(statusCode).toBe(200);
	});

	it("should return the edit staff member form", async () => {
		const { statusCode } = await request(app).get(`${root}/editar/1`);

		expect(statusCode).toBe(200);
	});
});
