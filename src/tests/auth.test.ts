import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";


describe("Get API Key tests", () => {
  test("missing auth header", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("get API Key", () => {
    const header = { "authorization": "ApiKey keyvalue"};
    expect(getAPIKey(header)).toBe("keyvale");
  });
});

