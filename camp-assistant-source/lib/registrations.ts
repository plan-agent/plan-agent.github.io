import fs from "fs";
import path from "path";

export type Registration = {
  id: string;
  name: string;
  school: string;
  major: string;
  grade: string;
  email: string;
  role: "技术开发" | "产品运营" | "设计传播" | "暂未确定";
  skills?: string[];
  idea?: string;
  expectation?: string;
  createdAt: string;
};

const DATA_FILE = path.join(process.cwd(), "data", "registrations.json");

function readData(): Registration[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeData(data: Registration[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export function getRegistrations(): Registration[] {
  return readData();
}

export function addRegistration(data: Omit<Registration, "id" | "createdAt">): Registration {
  const list = readData();
  const item: Registration = {
    ...data,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    createdAt: new Date().toISOString(),
  };
  list.push(item);
  writeData(list);
  return item;
}
