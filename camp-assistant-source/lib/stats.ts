export type StatsInput = {
  role: string;
  idea?: string;
};

export type Stats = {
  total: number;
  roleDistribution: Record<string, number>;
  ideaCount: number;
};

export function computeStats(registrations: StatsInput[]): Stats {
  const total = registrations.length;
  const roleDistribution: Record<string, number> = {};
  let ideaCount = 0;

  for (const r of registrations) {
    roleDistribution[r.role] = (roleDistribution[r.role] || 0) + 1;
    if (r.idea && r.idea.trim().length > 0) {
      ideaCount += 1;
    }
  }

  return { total, roleDistribution, ideaCount };
}
