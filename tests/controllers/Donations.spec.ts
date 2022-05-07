import request from "supertest";
import app from "../../src/app";

describe("Donations", () => {
	it.each([
		{
			should: "return the donations page of the web site",
			expected_code: 200,
		},
	])("should $should", async ({ expected_code }) => {
		const { statusCode: code, body } = await request(app).get("/donations");

		expect(code).toBe(expected_code);
	});
});
