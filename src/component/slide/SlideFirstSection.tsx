import { getArticle, ResponseArticle } from "../../helper/MethodGet";
import { useEffect, useState } from "react";
import { URL_FOR_BACK } from "../../helper/URL";
import { Link } from "react-router-dom";

export const SlideFirstSectiont = () => {
  const [articles, setArticles] = useState<ResponseArticle[]>([]);

  useEffect(() => {
    getArticle(
      `${URL_FOR_BACK.URL_BASE}${URL_FOR_BACK.ARTICLE}${URL_FOR_BACK.COUNTRY}/`
    ).then((data) => setArticles(data.slice(0, 5)));
  }, []);

  return (
    <>
      {articles && (
        <div className="slider_wrapper">
          <div className="slide_top">
            <div className="slide_top_first">
              <Link
                to={`article/${articles[0]?.url_post}`}
                className="slider_wrapper_a"
              >
                <picture>
                  <source
                    srcSet={`${articles[0]?.posterUrls.posterUrl1024x768}`}
                    media="(min-width: 1200px)"
                  />
                  <source
                    srcSet={`${articles[0]?.posterUrls.posterUrl1024x768}`}
                    media="(min-width: 992px)"
                  />
                  <img
                    src={articles[0]?.posterUrls?.posterUrl480x320}
                    alt={articles[0]?.title}
                    className="slide_top_img"
                    loading="lazy"
                  />
                </picture>
                <div className="slide_box_title_img slide_top_first_img">
                  <span className="slide_top_title">{articles[0]?.title}</span>
                  <span className="slide_top_com_count">
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/com.png`}
                      className="article_list_box_left_two_date_com"
                      alt="comment"
                    />
                    {articles[0]?.commentSet?.length}
                  </span>
                </div>
              </Link>
            </div>
            <div className="slide_top_two">
              <Link
                to={`article/${articles[1]?.url_post}`}
                className="slider_wrapper_a"
              >
                <picture>
                  <source
                    srcSet={`${articles[1]?.posterUrls.posterUrl1024x768}`}
                    media="(min-width: 1200px)"
                  />
                  <source
                    srcSet={`${articles[1]?.posterUrls.posterUrl1024x768}`}
                    media="(min-width: 992px)"
                  />
                  <img
                    src={articles[1]?.posterUrls?.posterUrl480x320}
                    alt={articles[1]?.title}
                    className="slide_top_img"
                    loading="lazy"
                  />
                </picture>
                <div className="slide_box_title_img slide_top_first_img">
                  <span className="slide_top_title">{articles[1]?.title}</span>
                  <span className="slide_top_com_count">
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/com.png`}
                      className="article_list_box_left_two_date_com"
                      alt="comment"
                    />
                    {articles[1]?.commentSet?.length}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="slide_bottom">
            <div className="slide_bottom_first">
              <Link
                to={`article/${articles[2]?.url_post}`}
                className="slider_wrapper_a"
              >
                <picture>
                  <img
                    src={articles[2]?.posterUrls?.posterUrl480x320}
                    alt={articles[2]?.title}
                    className="slide_bottom_img"
                    loading="lazy"
                  />
                </picture>
                <div className="slide_box_title_img slide_top_title_bottom">
                  <span className="slide_top_title">{articles[2]?.title}</span>
                  <span className="slide_top_com_count">
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/com.png`}
                      className="article_list_box_left_two_date_com"
                      alt="comment"
                    />
                    {articles[2]?.commentSet?.length}
                  </span>
                </div>
              </Link>
            </div>
            <div className="slide_bottom_second">
              <Link
                to={`article/${articles[3]?.url_post}`}
                className="slider_wrapper_a"
              >
                <picture>
                  <img
                    src={articles[3]?.posterUrls?.posterUrl480x320}
                    alt={articles[3]?.title}
                    className="slide_bottom_img"
                    loading="lazy"
                  />
                </picture>
                <div className="slide_box_title_img slide_top_title_bottom">
                  <span className="slide_top_title">{articles[3]?.title}</span>
                  <span className="slide_top_com_count">
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/com.png`}
                      className="article_list_box_left_two_date_com"
                      alt="comment"
                    />
                    {articles[3]?.commentSet?.length}
                  </span>
                </div>
              </Link>
            </div>
            <div className="slide_bottom_third">
              <Link
                to={`article/${articles[4]?.url_post}`}
                className="slider_wrapper_a"
              >
                <picture>
                  <img
                    src={articles[4]?.posterUrls?.posterUrl480x320}
                    alt={articles[4]?.title}
                    className="slide_bottom_img"
                    loading="lazy"
                  />
                </picture>
                <div className="slide_box_title_img slide_top_title_bottom">
                  <span className="slide_top_title">{articles[4]?.title}</span>
                  <span className="slide_top_com_count">
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/com.png`}
                      className="article_list_box_left_two_date_com"
                      alt="comment"
                    />
                    {articles[4]?.commentSet?.length}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
