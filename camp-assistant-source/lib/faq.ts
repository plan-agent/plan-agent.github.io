import faqData from "@/data/faq.json";

export type FaqItem = {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
};

export function findAnswer(query: string): { found: boolean; answer: string } {
  const trimmed = query.trim();
  if (!trimmed) return { found: false, answer: "" };

  const lowerQuery = trimmed.toLowerCase();
  const items: FaqItem[] = faqData;

  let best: FaqItem | null = null;
  let bestScore = 0;

  for (const item of items) {
    let score = 0;
    for (const kw of item.keywords) {
      if (lowerQuery.includes(kw.toLowerCase())) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  if (best && bestScore > 0) {
    return { found: true, answer: best.answer };
  }

  return {
    found: false,
    answer: "当前未找到精确答案，请联系主办方或查看活动介绍页。",
  };
}
