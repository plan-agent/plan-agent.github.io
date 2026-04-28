import { describe, it, expect } from "vitest";
import { findAnswer } from "@/lib/faq";

describe("findAnswer", () => {
  it("returns answer for known questions", () => {
    const result = findAnswer("报名截止时间是什么时候");
    expect(result.found).toBe(true);
    expect(result.answer).toContain("2025 年 6 月 30 日");
  });

  it("matches with partial keywords", () => {
    const result = findAnswer("没有编程基础能参加吗");
    expect(result.found).toBe(true);
    expect(result.answer).toContain("当然可以");
  });

  it("returns fallback for unknown questions", () => {
    const result = findAnswer("火星上有双创营吗");
    expect(result.found).toBe(false);
    expect(result.answer).toBe("当前未找到精确答案，请联系主办方或查看活动介绍页。");
  });

  it("returns empty for empty query", () => {
    const result = findAnswer("");
    expect(result.found).toBe(false);
    expect(result.answer).toBe("");
  });
});
