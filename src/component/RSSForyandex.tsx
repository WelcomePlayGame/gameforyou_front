import React, { useEffect, useState } from "react";
import { getArticle, ResponseArticle } from "../helper/MethodGet";
import { URL_FOR_BACK } from "../helper/URL";
import { formDate } from "../helper/FormData";

const RSSForyandex: React.FC = () => {
  const [articles, setArticles] = useState<ResponseArticle[]>([]);

  useEffect(() => {
    getArticle(
      `${URL_FOR_BACK.URL_BASE}${URL_FOR_BACK.ARTICLE}${URL_FOR_BACK.COUNTRY}/`
    ).then((data) => setArticles(data));
  }, []);

  const createXML = (articles: ResponseArticle[]): string => {
    // Создаем XML-структуру на основе полученных данных
    let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:yandex="http://news.yandex.ru"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:turbo="http://turbo.yandex.ru"
     version="2.0">
    <channel>
        <title>Название канала</title>
        <link>https://gameforyou.online</link>
        <description>News Game RSS</description>
        <language>ru</language>
    `;

    // Добавляем элементы для каждой статьи
    articles.forEach((article) => {
      xmlContent += `
        <item turbo="true">
            <link>${process.env.PUBLIC_URL}/${article.url_post}</link>
            <pubDate>${formDate(article.atCreate)}</pubDate>
            <author>GameForYou News</author>
            <metrics>
                <yandex schema_identifier="49489840">
                    <breadcrumblist>
                        <breadcrumb url="${
                          process.env.PUBLIC_URL
                        }" text="Home"/>
                        <breadcrumb url="${
                          process.env.PUBLIC_URL
                        }/news/" text="News"/>
                    </breadcrumblist>
                </yandex>
            </metrics>
            <turbo:content>
                <![CDATA[
                    <h1>${article.title}</h1>
                    <p>${article.des}</p>
                ]]>
            </turbo:content>
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

export default RSSForyandex;
