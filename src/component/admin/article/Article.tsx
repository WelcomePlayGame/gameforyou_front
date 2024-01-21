import { URL_FOR_BACK } from "../../../helper/URL";
import words from "../../../wordsvariable/WORDS";
import { getArticleById, ResponseArticle } from "../../../helper/MethodGet";
import { updateStatistics, IStatistics } from "../../../helper/MethodPost";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Breadcrumbs } from "../../../Breadcrumbs/Breadcrumbs";
import { formDate } from "../../../helper/FormData";
import { SelectStar } from "../../comments/SelectStar";
import { WriteCommentForArticle } from "../../comments/WriteCommentForArticle";

export const Article = () => {
  const [article, setArticle] = useState<ResponseArticle>();
  const { url_post } = useParams();
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    getArticleById(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.ARTICLE + URL_FOR_BACK.COUNTRY,
      url_post as string
    ).then((data) => setArticle(data));
  }, []);

  useEffect(() => {
    const timer1Seconds = setTimeout(() => {
      if (article && article.statistics) {
        const updatedStatistics: IStatistics = {
          id: article.statistics.id,
          action: article.statistics.action + 1,
        };

        updateStatistics(
          URL_FOR_BACK.URL_BASE +
            URL_FOR_BACK.STATISTICS +
            URL_FOR_BACK.COUNTRY +
            URL_FOR_BACK.UPDATE,
          updatedStatistics
        );
      }
    }, 1000);
    const timer15Seconds = setTimeout(() => {
      if (article && article.statistics) {
        const updatedStatistics: IStatistics = {
          id: article.statistics.id,
          more15: article.statistics.more15 + 1,
        };

        updateStatistics(
          URL_FOR_BACK.URL_BASE +
            URL_FOR_BACK.STATISTICS +
            URL_FOR_BACK.COUNTRY +
            URL_FOR_BACK.UPDATE,
          updatedStatistics
        );
      }
    }, 15000);

    const timer30Seconds = setTimeout(() => {
      if (article && article.statistics) {
        const updatedStatistics: IStatistics = {
          id: article.statistics.id,
          more30: article.statistics.more30 + 1,
        };

        updateStatistics(
          URL_FOR_BACK.URL_BASE +
            URL_FOR_BACK.STATISTICS +
            URL_FOR_BACK.COUNTRY +
            URL_FOR_BACK.UPDATE,
          updatedStatistics
        );
      }
    }, 30000);

    const timer45Seconds = setTimeout(() => {
      if (article && article.statistics) {
        const updatedStatistics: IStatistics = {
          id: article.statistics.id,
          more45: article.statistics.more45 + 1,
        };

        updateStatistics(
          URL_FOR_BACK.URL_BASE +
            URL_FOR_BACK.STATISTICS +
            URL_FOR_BACK.COUNTRY +
            URL_FOR_BACK.UPDATE,
          updatedStatistics
        );
      }
    }, 45000);

    return () => {
      clearTimeout(timer15Seconds);
      clearTimeout(timer30Seconds);
      clearTimeout(timer45Seconds);
      clearTimeout(timer1Seconds);
    };
  }, [article]);

  const createMarkup = (html: string) => ({ __html: html });
  return (
    <>
      <section className="box_article">
        <Helmet>
          <title>{article?.seo_title}</title>
          <meta name="description" content={article?.seo_des} />
        </Helmet>
        <div className="article_box_header">
          <picture>
            <source
              srcSet={`${article?.posterUrls.posterUrl1024x768}`}
              media="(min-width: 1200px)"
            />
            <source
              srcSet={`${article?.posterUrls.posterUrl480x320}`}
              media="(max-width: 992px)"
            />
            <img
              src={`${article?.posterUrls.posterUrl1024x768}`}
              alt={article?.title}
              loading="lazy"
              className="article_header_box_img"
            />
          </picture>
        </div>

        <div className="article_box_inf">
          <div className="crumbs_article">
            <Breadcrumbs
              crumbs={[
                {
                  label: `${words.BREADCRUMBS_HOME}`,
                  url: `${process.env.PUBLIC_URL}`,
                },
                {
                  label: `${words.BREADCRUMBS_LIST_ARTICLE}`,
                  // url: `${process.env.PUBLIC_URL}/article`,
                },
              ]}
            />
          </div>
          <div className="statistics_article">
            <span>{formDate(article?.atCreate)}</span>
            <span className="comment_by_article">
              <img
                src="../icons/com.png"
                alt="comment by article"
                className="icons_count"
              />
              {article?.commentSet?.length}
            </span>
            <span className="icons_count_box">
              <img
                src="../icons/eyes.png"
                className="icons_count"
                alt="number of pages viewed"
              />
              {article?.statistics.action}
            </span>
          </div>
          <h1 className="article_page_h1">{article?.title}</h1>
          <div className="article_page_des">
            <div
              dangerouslySetInnerHTML={
                article?.des
                  ? {
                      __html: article.des.replace(
                        /<img/g,
                        `<img alt="${article.title}"`
                      ),
                    }
                  : undefined
              }
              className="game_box_body_right_text des"
            ></div>
            <div className="tag_set_article">
              <span className="tag_set_article_span">
                {`${words.SET_TAG_FOR_ARTICLE} : `}
                {article?.tagSet.map((tag) => (
                  <span key={tag.id} className="tag_set_article_span_el">
                    {tag.title}
                  </span>
                ))}
              </span>
            </div>
            {article?.gamePost ? (
              <div className="article_for_game_box">
                <div>
                  <a
                    href={`${process.env.PUBLIC_URL}/game/${article?.gamePost?.url_post}`}
                  >
                    <img
                      src={article?.gamePost?.posterVertical_urs.poster_300x300}
                      alt={article?.gamePost.title}
                      className="article_for_game_box_img"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div>
                  <div className="article_for_game_box_info">
                    <h2 className="article_for_game_box_info_h2">
                      {article?.gamePost.title}
                    </h2>
                    <span className="article_for_game_box_info_span">
                      {words.PLATFORM} -{" "}
                      {article?.gamePost.platformsSet.map((platform) => (
                        <span
                          key={platform.id}
                          className="article_for_game_box_info_span_el"
                        >
                          {platform.title}{" "}
                        </span>
                      ))}
                    </span>
                    <span className="article_for_game_box_info_span">
                      {words.GENRE} -{" "}
                      {article?.gamePost.genresSet.map((genre) => (
                        <span
                          key={genre.id}
                          className="article_for_game_box_info_span_el"
                        >
                          {genre.title}{" "}
                        </span>
                      ))}
                    </span>
                    <span className="article_for_game_box_info_span">
                      {words.DATA_RELASE} -{" "}
                      <span className="article_for_game_box_info_span_el">
                        {article?.gamePost.datatime}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="article_for_game_box_rating">
                  <SelectStar setRating={setRating} rating={rating} />
                </div>
              </div>
            ) : null}

            <div>
              <WriteCommentForArticle article={{ id: Number(article?.id) }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
