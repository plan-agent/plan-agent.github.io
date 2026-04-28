import { describe, it, expect } from "vitest";
import { computeStats } from "@/lib/stats";

const makeReg = (role: string, idea?: string) =>
  ({
    id: "1",
    name: "Test",
    school: "S",
    major: "M",
    grade: "G",
    email: "e@e.com",
    role: role as any,
    idea,
    createdAt: "2025-01-01",
  });

describe("computeStats", () => {
  it("returns zero for empty list", () => {
    const result = computeStats([]);
    expect(result.total).toBe(0);
    expect(result.ideaCount).toBe(0);
    expect(result.roleDistribution).toEqual({});
  });

  it("counts total and roles correctly", () => {
    const result = computeStats([
      makeReg("技术开发"),
      makeReg("产品运营"),
      makeReg("技术开发"),
    ]);
    expect(result.total).toBe(3);
    expect(result.roleDistribution["技术开发"]).toBe(2);
    expect(result.roleDistribution["产品运营"]).toBe(1);
  });

  it("counts idea submissions", () => {
    const result = computeStats([
      makeReg("技术开发", "My idea"),
      makeReg("产品运营", ""),
      makeReg("设计传播"),
    ]);
    expect(result.ideaCount).toBe(1);
  });
});
