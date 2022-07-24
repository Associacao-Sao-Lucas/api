import request from "supertest";
import app from "../../src/app";

describe("Routes", () => {
	it.each([
		"/",
		"/health",
		"/galeria",
		"/parceiros",
		"/colaboradores",
		"/transparencia",
	])("should return OK for all the routes", async (route) => {
		const { statusCode } = await request(app).get(route);
		expect(statusCode).toBe(200);
	});
});
