"use client";

import { useState } from "react";
import { validateRegistration } from "@/lib/validation";
import { addClientRegistration } from "@/lib/client-storage";

const ROLES = ["技术开发", "产品运营", "设计传播", "暂未确定"];

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    school: "",
    major: "",
    grade: "",
    email: "",
    role: "",
    skills: "",
    idea: "",
    expectation: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setSuccess(false);
    setLoading(true);

    const { valid, errors: validationErrors } = validateRegistration(form);
    if (!valid) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    addClientRegistration({
      name: form.name.trim(),
      school: form.school.trim(),
      major: form.major.trim(),
      grade: form.grade.trim(),
      email: form.email.trim(),
      role: form.role,
      skills: form.skills ? form.skills.split(",").map((s) => s.trim()).filter(Boolean) : undefined,
      idea: form.idea?.trim() || undefined,
      expectation: form.expectation?.trim() || undefined,
    });

    setLoading(false);
    setSuccess(true);
    setErrors({});
    setForm({
      name: "",
      school: "",
      major: "",
      grade: "",
      email: "",
      role: "",
      skills: "",
      idea: "",
      expectation: "",
    });
  };

  return (
    <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-2">活动报名</h1>
      <p className="text-gray-600 mb-8">填写以下信息完成报名</p>

      {success && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
          报名成功！
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { key: "name", label: "姓名", required: true },
          { key: "school", label: "学校", required: true },
          { key: "major", label: "专业", required: true },
          { key: "grade", label: "年级", required: true },
          { key: "email", label: "邮箱", required: true, type: "email" },
        ].map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium mb-1">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type || "text"}
              value={(form as Record<string, string>)[field.key]}
              onChange={(e) => update(field.key, e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[field.key] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.key]}</p>
            )}
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium mb-1">
            角色倾向 <span className="text-red-500">*</span>
          </label>
          <select
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">请选择</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">技能标签（选填）</label>
          <input
            type="text"
            value={form.skills}
            onChange={(e) => update("skills", e.target.value)}
            placeholder="如：Python, Figma, 文案写作（用逗号分隔）"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">创意想法（选填，不超过200字）</label>
          <textarea
            value={form.idea}
            onChange={(e) => update("idea", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">{form.idea.length}/200</p>
          {errors.idea && <p className="text-red-500 text-sm mt-1">{errors.idea}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">参加期待（选填，不超过200字）</label>
          <textarea
            value={form.expectation}
            onChange={(e) => update("expectation", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">{form.expectation.length}/200</p>
          {errors.expectation && <p className="text-red-500 text-sm mt-1">{errors.expectation}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "提交中..." : "提交报名"}
        </button>
      </form>
    </main>
  );
}
