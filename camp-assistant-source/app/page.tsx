import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">双创营报名与答疑助手</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            统一展示活动信息、收集报名、回答常见问题，助力双创营高效运营
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              立即报名
            </Link>
            <Link
              href="/faq"
              className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              常见问题
            </Link>
          </div>
        </div>
      </section>

      {/* 活动亮点 */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">活动亮点</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "实战导向", desc: "以真实项目为驱动，边做边学" },
            { title: "跨学科组队", desc: "技术、产品、设计多角色协作" },
            { title: "导师辅导", desc: "行业导师一对一项目指导" },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 基本信息 */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-700 mb-1">2025.07 - 2025.08</div>
            <div className="text-gray-600">活动时间</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-700 mb-1">线上 + 线下</div>
            <div className="text-gray-600">活动地点</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-700 mb-1">在校大学生</div>
            <div className="text-gray-600">招募对象</div>
          </div>
        </div>
      </section>

      {/* 四大模块 */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">四大模块</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "需求洞察", desc: "学习用户调研与需求分析方法" },
            { title: "产品设计", desc: "从原型到交互，打磨产品方案" },
            { title: "技术实现", desc: "前后端基础与快速开发实践" },
            { title: "路演展示", desc: "项目包装与数据呈现技巧" },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-gray-200 bg-white">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">准备好了吗？</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            立即报名
          </Link>
          <Link
            href="/faq"
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            常见问题
          </Link>
        </div>
      </section>
    </main>
  );
}
