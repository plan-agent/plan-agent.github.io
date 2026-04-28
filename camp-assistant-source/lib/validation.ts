export type RegistrationInput = {
  name: string;
  school: string;
  major: string;
  grade: string;
  email: string;
  role: string;
  skills?: string;
  idea?: string;
  expectation?: string;
};

export type ValidationErrors = Partial<Record<keyof RegistrationInput, string>>;

const ROLES = ["技术开发", "产品运营", "设计传播", "暂未确定"];

export function validateRegistration(input: RegistrationInput): { valid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  if (!input.name?.trim()) errors.name = "姓名不能为空";
  if (!input.school?.trim()) errors.school = "学校不能为空";
  if (!input.major?.trim()) errors.major = "专业不能为空";
  if (!input.grade?.trim()) errors.grade = "年级不能为空";
  if (!input.email?.trim()) {
    errors.email = "邮箱不能为空";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "邮箱格式不正确";
  }
  if (!input.role?.trim()) {
    errors.role = "请选择角色倾向";
  } else if (!ROLES.includes(input.role)) {
    errors.role = "角色倾向不正确";
  }
  if (input.idea && input.idea.length > 200) {
    errors.idea = "创意想法不能超过200字";
  }
  if (input.expectation && input.expectation.length > 200) {
    errors.expectation = "参加期待不能超过200字";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
