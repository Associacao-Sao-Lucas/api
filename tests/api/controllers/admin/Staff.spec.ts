import request from "supertest";
import app from "../../../../src/api/app";

describe("Staff", () => {
	it.each([
		{
			should: "return an admin form to create a new staff member",
			expected_code: 200,
		},
	])("should $should", async ({ expected_code }) => {
    const { statusCode: code, body } = await request(app)
      .get("/admin/colaboradores");

		expect(code).toBe(expected_code);
	});
});
