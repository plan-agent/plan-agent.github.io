"use client";

import { useState } from "react";
import { findAnswer } from "@/lib/faq";

const SUGGESTIONS = [
  "报名截止时间是什么时候？",
  "没有编程基础可以参加吗？",
  "可以跨专业组队吗？",
  "需要自带电脑吗？",
  "双创营结束后会有什么成果？",
];

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [found, setFound] = useState(false);

  const ask = (text: string) => {
    setQuery(text);
    const result = findAnswer(text);
    setAnswer(result.answer);
    setFound(result.found);
  };

  return (
    <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-2">常见问题</h1>
      <p className="text-gray-600 mb-8">输入你的问题，或点击下方快捷问题</p>

      <div className="space-y-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") ask(query);
          }}
          placeholder="请输入你的问题..."
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => ask(query)}
          className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          提问
        </button>
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-500 mb-2">快捷问题：</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => ask(s)}
              className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {answer && (
        <div
          className={`mt-8 p-4 rounded-lg border ${
            found
              ? "bg-blue-50 border-blue-200 text-blue-800"
              : "bg-yellow-50 border-yellow-200 text-yellow-800"
          }`}
        >
          <p className="font-medium mb-1">{found ? "答案" : "提示"}</p>
          <p>{answer}</p>
        </div>
      )}
    </main>
  );
}
