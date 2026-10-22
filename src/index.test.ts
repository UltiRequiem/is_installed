import { describe, expect, it } from "vitest";
import { isInstalled, isInstalledSync } from "./index.js";

describe("isInstalled", () => {
  it("finds a program that exists", async () => {
    expect(await isInstalled("node", ["--version"])).toBe(true);
  });

  it("returns false for a program that does not exist", async () => {
    expect(await isInstalled("definitely-not-a-real-command-xyz")).toBe(false);
  });
});

describe("isInstalledSync", () => {
  it("finds a program that exists", () => {
    expect(isInstalledSync("node", ["--version"])).toBe(true);
  });

  it("returns false for a program that does not exist", () => {
    expect(isInstalledSync("definitely-not-a-real-command-xyz")).toBe(false);
  });
});
