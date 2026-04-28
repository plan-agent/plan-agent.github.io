"use client";

import { useState, useEffect } from "react";
import { getClientRegistrations, ClientRegistration } from "@/lib/client-storage";
import { computeStats } from "@/lib/stats";

export default function DemoPage() {
  const [data, setData] = useState<ClientRegistration[]>([]);

  useEffect(() => {
    setData(getClientRegistrations());
  }, []);

  const stats = computeStats(data);

  return (
    <main className="flex-1 max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-2">路演页</h1>
      <p className="text-gray-600 mb-8">项目成果展示</p>

      <section className="mb-10 space-y-4">
        <h2 className="text-lg font-semibold">解决的问题</h2>
        <p className="text-gray-700">
          当前活动信息散落在海报、微信群和问卷链接中，导致信息获取成本高、报名数据分散、高频问题重复回答、路演缺少产品化结果页。
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-lg font-semibold">产品方案</h2>
        <p className="text-gray-700">
          打造一个轻量 Web 应用，统一展示活动信息、收集报名、回答常见问题，并在路演时展示结果数据。
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-lg font-semibold">核心功能</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "活动信息展示",
            "在线报名表单",
            "FAQ 自动答疑",
            "管理员查看记录",
            "路演数据统计",
          ].map((f) => (
            <div key={f} className="px-4 py-3 bg-white border rounded-lg">
              {f}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4">数据看板</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 bg-white border rounded-lg text-center">
            <p className="text-3xl font-bold text-blue-700">{stats.total}</p>
            <p className="text-sm text-gray-500 mt-1">报名总人数</p>
          </div>
          <div className="p-6 bg-white border rounded-lg text-center">
            <p className="text-3xl font-bold text-green-700">{stats.ideaCount}</p>
            <p className="text-sm text-gray-500 mt-1">填写创意想法人数</p>
          </div>
          <div className="p-6 bg-white border rounded-lg text-center">
            <p className="text-3xl font-bold text-purple-700">
              {Object.keys(stats.roleDistribution).length}
            </p>
            <p className="text-sm text-gray-500 mt-1">覆盖角色类型</p>
          </div>
        </div>

        {stats.total > 0 && (
          <div className="mt-6 p-6 bg-white border rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-3">角色分布</h3>
            <div className="space-y-3">
              {Object.entries(stats.roleDistribution).map(([role, count]) => {
                const pct = Math.round((count / stats.total) * 100);
                return (
                  <div key={role}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{role}</span>
                      <span className="text-gray-500">
                        {count}人 ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">下一步升级方向</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>FAQ 从关键词匹配升级为真实 LLM 问答</li>
          <li>本地 JSON 升级为数据库持久化</li>
          <li>增加管理员登录与导出功能</li>
          <li>增加消息通知与自动分组</li>
        </ul>
      </section>
    </main>
  );
}
