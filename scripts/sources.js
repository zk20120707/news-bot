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
    category: "📈 财经股市",
    sources: [
      { name: "36氪", url: "https://36kr.com/feed", type: "blog" },
      { name: "虎嗅", url: "https://www.huxiu.com/rss/0.xml", type: "blog" },
      { name: "A股股市新闻", url: "https://news.google.com/rss/search?q=A股+股市+股票+行情&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" },
      { name: "美股港股", url: "https://news.google.com/rss/search?q=美股+港股+纳斯达克&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" },
      { name: "财经政策", url: "https://news.google.com/rss/search?q=央行+货币政策+GDP+经济数据&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" }
    ]
  },
  {
    category: "⚔️ 军事防务",
    sources: [
      { name: "军事新闻", url: "https://news.google.com/rss/search?q=军事+国防+武器+军演&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" },
      { name: "国际军情", url: "https://news.google.com/rss/search?q=国际军事+地缘冲突&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" }
    ]
  },
  {
    category: "📱 手机数码",
    sources: [
      { name: "IT之家", url: "https://www.ithome.com/rss/", type: "blog" },
      { name: "cnBeta", url: "https://rss.cnbeta.com/rss", type: "blog" },
      { name: "手机数码", url: "https://news.google.com/rss/search?q=手机+iPhone+华为+小米+新品发布&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" }
    ]
  },
  {
    category: "🚗 汽车出行",
    sources: [
      { name: "汽车新闻", url: "https://news.google.com/rss/search?q=汽车+新能源汽车+新车发布&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" },
      { name: "电动车行业", url: "https://news.google.com/rss/search?q=电动汽车+比亚迪+特斯拉&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" }
    ]
  },
  {
    category: "🤖 AI前沿",
    sources: [
      { name: "arXiv AI", url: "https://export.arxiv.org/rss/cs.AI", type: "arxiv" },
      { name: "arXiv LLM", url: "https://export.arxiv.org/rss/cs.CL", type: "arxiv" },
      { name: "AI行业动态", url: "https://news.google.com/rss/search?q=AI+大模型+ChatGPT+人工智能&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", type: "news" }
    ]
  },
  {
    category: "💻 开发者技术",
    sources: [
      { name: "GitHub Blog", url: "https://github.blog/rss", type: "blog" },
      { name: "Hacker News", url: "https://hnrss.org/frontpage", type: "news" },
      { name: "Solidot", url: "https://www.solidot.org/index.rss", type: "blog" }
    ]
  }
];
