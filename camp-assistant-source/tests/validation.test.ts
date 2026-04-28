import { describe, it, expect } from "vitest";
import { validateRegistration } from "@/lib/validation";

const base = {
  name: "张三",
  school: "深圳大学",
  major: "计算机",
  grade: "大三",
  email: "zhangsan@example.com",
  role: "技术开发",
};

describe("validateRegistration", () => {
  it("passes with valid input", () => {
    const result = validateRegistration(base);
    expect(result.valid).toBe(true);
    expect(Object.keys(result.errors)).toHaveLength(0);
  });

  it("fails when required fields are missing", () => {
    const result = validateRegistration({
      name: "",
      school: "",
      major: "",
      grade: "",
      email: "",
      role: "",
    });
    expect(result.valid).toBe(false);
    expect(result.errors.name).toBe("姓名不能为空");
    expect(result.errors.school).toBe("学校不能为空");
    expect(result.errors.major).toBe("专业不能为空");
    expect(result.errors.grade).toBe("年级不能为空");
    expect(result.errors.email).toBe("邮箱不能为空");
    expect(result.errors.role).toBe("请选择角色倾向");
  });

  it("fails with invalid email", () => {
    const result = validateRegistration({ ...base, email: "not-an-email" });
    expect(result.valid).toBe(false);
    expect(result.errors.email).toBe("邮箱格式不正确");
  });

  it("fails with invalid role", () => {
    const result = validateRegistration({ ...base, role: "黑客" });
    expect(result.valid).toBe(false);
    expect(result.errors.role).toBe("角色倾向不正确");
  });

  it("fails when idea exceeds 200 chars", () => {
    const result = validateRegistration({ ...base, idea: "a".repeat(201) });
    expect(result.valid).toBe(false);
    expect(result.errors.idea).toBe("创意想法不能超过200字");
  });

  it("fails when expectation exceeds 200 chars", () => {
    const result = validateRegistration({ ...base, expectation: "b".repeat(201) });
    expect(result.valid).toBe(false);
    expect(result.errors.expectation).toBe("参加期待不能超过200字");
  });
});
