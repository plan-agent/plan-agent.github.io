const STORAGE_KEY = "camp-registrations";

export type ClientRegistration = {
  id: string;
  name: string;
  school: string;
  major: string;
  grade: string;
  email: string;
  role: string;
  skills?: string[];
  idea?: string;
  expectation?: string;
  createdAt: string;
};

export function getClientRegistrations(): ClientRegistration[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function addClientRegistration(
  data: Omit<ClientRegistration, "id" | "createdAt">
): ClientRegistration {
  const list = getClientRegistrations();
  const item: ClientRegistration = {
    ...data,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    createdAt: new Date().toISOString(),
  };
  list.push(item);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return item;
}
