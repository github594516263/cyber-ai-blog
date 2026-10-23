import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/siteConfig';

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const siteUrl = site?.toString() || 'https://cyber-ai-blog.example.com/';

  const itemsXml = posts
    .map((post) => {
      const link = new URL(`/blog/${post.id}/`, siteUrl).toString();
      return `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      <description><![CDATA[${post.data.description} — [AI Digest]: ${post.data.aiSummary}]]></description>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.title} — ${siteConfig.subtitle}</title>
    <link>${siteUrl}</link>
    <description>${siteConfig.author.bio}</description>
    <language>zh-cn</language>${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
