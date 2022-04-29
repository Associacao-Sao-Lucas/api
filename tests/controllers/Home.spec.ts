import request from "supertest";
import app from "../../src/app";

describe("Home", () => {
	it.each([
		{
			should: "return the web site home",
			expected_code: 200,
		},
	])("should $should", async ({ expected_code }) => {
		const { statusCode: code, body } = await request(app).get("/");

		expect(code).toBe(expected_code);
	});
});
