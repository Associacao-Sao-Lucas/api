import request from "supertest";
import app from "../../../src/admin/app";

describe("Staff", () => {
	it("should return the create staff member form", async () => {
		const { statusCode, body } = await request(app).get(
			"/admin/colaboradores/criar"
		);

		console.log(body);

		expect(statusCode).toBe(200);
	});
});
