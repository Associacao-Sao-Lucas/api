import request from "supertest";
import app from "../../src/app";

describe("Contact", () => {
	it.each([
		{
			should: "return the contact page of the web site",
			expected_code: 200,
		},
	])("should $should", async ({ expected_code }) => {
		const { statusCode: code, body } = await request(app).get("/contato");

		expect(code).toBe(expected_code);
	});
});
