// 白名单：允许抓取全文的站点
const FULLTEXT_WHITELIST = [
  "research.google",
  "github.blog",
  "blog.rust-lang.org",
  "solidot.org",
  "ithome.com"
];

// 检查URL是否在白名单中
export function canFetchFullText(url) {
  return FULLTEXT_WHITELIST.some(domain => url.includes(domain));
}

// 检查是否是arXiv源
export function isArxivSource(sourceName) {
  return sourceName && sourceName.toLowerCase().includes('arxiv');
}

export const SOURCES = [
  {
    category: "🌍 国际主流媒体",
    sources: [
      { name: "BBC中文", url: "https://news.google.com/rss/search?q=bbc+chinese&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" },
      { name: "路透社中文", url: "https://news.google.com/rss/search?q=reuters+chinese&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" },
      { name: "纽约时报中文", url: "https://news.google.com/rss/search?q=nyt+chinese&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" },
      { name: "美国之音中文", url: "https://news.google.com/rss/search?q=voa+chinese&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" },
      { name: "华尔街日报中文", url: "https://news.google.com/rss/search?q=wsj+chinese&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" }
    ]
  },
  {
    category: "🔥 科技数码",
    sources: [
      { name: "IT之家", url: "https://www.ithome.com/rss/", type: "blog" },
      { name: "Solidot", url: "https://www.solidot.org/index.rss", type: "blog" },
      { name: "少数派", url: "https://sspai.com/feed", type: "blog" }
    ]
  },
  {
    category: "💰 财经商业",
    sources: [
      { name: "36氪", url: "https://36kr.com/feed", type: "blog" },
      { name: "虎嗅", url: "https://www.huxiu.com/rss/0.xml", type: "blog" }
    ]
  },
  {
    category: "🤖 AI前沿",
    sources: [
      { name: "arXiv AI", url: "https://export.arxiv.org/rss/cs.AI", type: "arxiv" },
      { name: "arXiv LLM", url: "https://export.arxiv.org/rss/cs.CL", type: "arxiv" },
      { name: "OpenAI Blog", url: "https://openai.com/blog/rss.xml", type: "blog" }
    ]
  },
  {
    category: "💻 开发者技术",
    sources: [
      { name: "GitHub Blog", url: "https://github.blog/rss", type: "blog" },
      { name: "Hacker News", url: "https://hnrss.org/frontpage", type: "news" }
    ]
  }
];
