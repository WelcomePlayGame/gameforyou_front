import { useState, useEffect } from "react";
import { getArticle, ResponseArticle } from "../../../helper/MethodGet";
import { URL_FOR_BACK } from "../../../helper/URL";
import { formDate } from "../../../helper/FormData";
import { Helmet } from "react-helmet";
import words from "../../../wordsvariable/WORDS";
import { Breadcrumbs } from "../../../Breadcrumbs/Breadcrumbs";
const ListArticle = () => {
  const [articles, setArticles] = useState<ResponseArticle[]>([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(8);
  useEffect(() => {
    getArticle(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.ARTICLE + URL_FOR_BACK.COUNTRY + "/"
    ).then((data) => setArticles(data));
  }, []);
  const reversedArticles = [...articles].reverse().slice(0, visibleNewsCount);
  const secondHalf = reversedArticles.slice(
    Math.ceil(reversedArticles.length / 2)
  );
  const loadMoreNews = () => {
    setVisibleNewsCount((prevCount) => prevCount + 6);
  };

  return (
    <section className="article_list">
      <Helmet>
        <title>{words.TITLE_LIST_ARTICLE_SEO}</title>
        <meta name="description" content={words.DES_LIST_ARTICLE_SEO} />
      </Helmet>
      <div className="article_list_box">
        <div className="article_list_crumbs">
          <Breadcrumbs
            crumbs={[
              {
                label: `${words.BREADCRUMBS_HOME}`,
                url: `${process.env.PUBLIC_URL}`,
              },
              {
                label: `${words.BREADCRUMBS_LIST_ARTICLE}`,
                url: `${process.env.PUBLIC_URL}/article`,
              },
            ]}
          />
        </div>
        <div className="article_list_box_left">
          <h1>{words.GAME_NEWS}</h1>
          {reversedArticles.map((article) => (
            <div key={article.id} className="article_list_box_left_one">
              <div>
                <a
                  href={`${process.env.PUBLIC_URL}/article/${article.url_post}`}
                  className="article_list_box_left_one_a"
                >
                  <img
                    src={
                      article &&
                      article.posterUrls &&
                      article.posterUrls.posterUrl480x320
                    }
                    alt={article && article.title}
                    className="article_list_box_left_one_img"
                  />
                </a>
              </div>
              <div className="article_list_box_left_two">
                <h3 className="article_list_box_left_one_a_span">
                  {article.title.length > 30
                    ? article.title.slice(0, 50) + " ..."
                    : article.title}
                </h3>
                <span className="article_list_box_left_two_span_tag">
                  {article.tagSet.map((tag) => (
                    <span key={tag.id} className="">
                      {tag.title}
                    </span>
                  ))}
                </span>
                <div className="article_list_box_left_two_date">
                  <span className="article_list_box_left_two_date_span">
                    {formDate(article.atCreate)}
                  </span>
                  <span>
                    <img
                      src="./icons/com.png"
                      className="article_list_box_left_two_date_com"
                      alt="comment"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="article_list_box_right">
          <h2>Everyone is discussing</h2>
          {[...secondHalf].map((article) => (
            <div key={article.id} className="article_list_box_right_box">
              <a href={`${process.env.PUBLIC_URL}/article/${article.url_post}`}>
                <img
                  src={article.posterUrls.posterUrl480x320}
                  alt={article.title}
                  className="article_list_box_right_img"
                />
              </a>
              <div className="article_list_box_right_general_info">
                <div className="article_list_box_right_general_info_inner">
                  <span className="article_list_box_right_box_span">
                    {article.mark === "news" && `${words.NEWS}`}
                  </span>
                </div>
                <span>
                  <a
                    href={`${process.env.PUBLIC_URL}/article/${article.url_post}`}
                  >
                    <span className="article_list_box_right_box_span">
                      <h3>
                        {article.title.length > 30
                          ? `${article.title.slice(0, 30)} ...`
                          : `${article.title}`}
                      </h3>
                    </span>
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="box_btn_list_news">
        <button onClick={loadMoreNews} className="btn_list_news">
          {words.PUSH_ON}
        </button>
      </div>
    </section>
  );
};
export default ListArticle;
