import request from "supertest";
import app from "../../../src/api/app";

describe("HealthCheck", () => {
  it.each([
    {
      should: "return 200",
      expected_response: { status: "ok" },
      expected_code: 200,
    },
  ])("should $should", async ({ expected_code, expected_response }) => {
    const { statusCode: code, body } = await request(app).get("/health");

    expect(code).toBe(expected_code);
    expect(body).toEqual(expected_response);
  });
});
