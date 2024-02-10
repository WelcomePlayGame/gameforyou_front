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
    // Создаем XML-структуру на основе полученных данных
    let xmlContent = `
      <rss version="2.0">
        <channel>
          <title>News Games</title>
          <link>https://gameforyou.online</link>
          <description>News Game RSS</description>
      `;

    // Добавляем элементы для каждой статьи
    articles.forEach((article) => {
      xmlContent += `
          <item>
            <title>${article.title}</title>
            <description><![CDATA[${article.des}]]></description>
            <link>/${process.env.PUBLIC_URL}/${article.url_post}</link>
            <pubDate>${formDate(article.atCreate)}</pubDate>
          </item>
      `;
    });

    // Завершаем XML-структуру
    xmlContent += `
        </channel>
      </rss>
    `;

    return xmlContent;
  };

  // Создаем XML-структуру для RSS-канала
  const rssXML: string = createXML(articles);

  return (
    <div>
      <pre>{rssXML}</pre>
    </div>
  );
};

export default RSS;
