"use client";

import { useState, useEffect } from "react";
import { getClientRegistrations, ClientRegistration } from "@/lib/client-storage";

export default function AdminPage() {
  const [data, setData] = useState<ClientRegistration[]>([]);

  useEffect(() => {
    setData(getClientRegistrations());
  }, []);

  const sorted = [...data].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <main className="flex-1 max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-2">管理员页</h1>
      <p className="text-gray-600 mb-8">查看报名记录</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-white border rounded-lg">
          <p className="text-sm text-gray-500">报名总人数</p>
          <p className="text-3xl font-bold text-blue-700">{data.length}</p>
        </div>
      </div>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600">姓名</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">学校</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">专业</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">角色倾向</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">提交时间</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {sorted.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                  暂无报名记录
                </td>
              </tr>
            )}
            {sorted.map((r) => (
              <tr key={r.id} className="bg-white hover:bg-gray-50">
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3">{r.school}</td>
                <td className="px-4 py-3">{r.major}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-50 text-blue-700">
                    {r.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(r.createdAt).toLocaleString("zh-CN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
