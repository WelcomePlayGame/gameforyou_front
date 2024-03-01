import React, { useEffect, useState } from "react";
import { getArticle, ResponseArticle } from "../helper/MethodGet";
import { URL_FOR_BACK } from "../helper/URL";
import { formDate } from "../helper/FormData";

const RSS: React.FC = () => {
  const [articles, setArticles] = useState<ResponseArticle[]>([]);

  useEffect(() => {
    getArticle(
      `${URL_FOR_BACK.URL_BASE}${URL_FOR_BACK.ARTICLE}${URL_FOR_BACK.COUNTRY}/`
    ).then((data) => setArticles(data));
  }, []);

  const createXML = (articles: ResponseArticle[]): string => {
    let xmlContent = `<?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
        <channel>
          <title>News Games</title>
          <link>https://gameforyou.online</link>
          <description>News Game RSS</description>
    `;

    articles.forEach((article) => {
      xmlContent += `
          <item>
            <title>${escapeXml(article.title)}</title>
            <description><![CDATA[${escapeXml(article.des)}]]></description>
            <link>${process.env.PUBLIC_URL}/article/${encodeURIComponent(
        article.url_post
      )}</link>
            <pubDate>${formDate(article.atCreate)}</pubDate>
            <enclosure url="${
              article.posterUrls.posterUrl480x320
            }" type="image/jpeg" /> 
          </item>
      `;
    });

    xmlContent += `
        </channel>
      </rss>
    `;

    return xmlContent;
  };

  const escapeXml = (unsafe: string): string => {
    return unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "&":
          return "&amp;";
        case "'":
          return "&apos;";
        case '"':
          return "&quot;";
        default:
          return c;
      }
    });
  };

  const handleDownload = () => {
    const rssXML: string = createXML(articles);
    const blob = new Blob([rssXML], { type: "text/xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "rss.xml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download RSS</button>
    </div>
  );
};

export default RSS;
