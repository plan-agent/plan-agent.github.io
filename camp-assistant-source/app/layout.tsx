import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "双创营报名与答疑助手",
  description: "帮助双创营主办方统一展示活动信息、收集报名、回答常见问题的轻量 Web 应用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
