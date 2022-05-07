import request from "supertest";
import app from "../../src/app";

describe("Gallery", () => {
	it.each([
		{
			should: "return the gallery page of the web site",
			expected_code: 200,
		},
	])("should $should", async ({ expected_code }) => {
		const { statusCode: code, body } = await request(app).get("/gallery");

		expect(code).toBe(expected_code);
	});
});
