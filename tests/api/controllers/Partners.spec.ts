import request from "supertest";
import app from "../../../src/api/app";

describe("Partners", () => {
  it.each([
    {
      should: "return the partners page of the web site",
      expected_code: 200,
    },
  ])("should $should", async ({ expected_code }) => {
    const { statusCode: code, body } = await request(app).get("/parceiros");

    expect(code).toBe(expected_code);
  });
});
