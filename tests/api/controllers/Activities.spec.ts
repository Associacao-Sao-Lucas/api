import request from "supertest";
import app from "../../../src/api/app";

describe("Activities", () => {
	it.each([
		{
			should: "return the activities page of the web site",
			expected_code: 200,
		},
	])("should $should", async ({ expected_code }) => {
		const { statusCode: code, body } = await request(app).get("/atividades");

		expect(code).toBe(expected_code);
	});
});