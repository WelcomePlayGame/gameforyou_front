import words from "../wordsvariable/WORDS";
import { useState, useEffect } from "react";
import { getArticle, ResponseArticle } from "../helper/MethodGet";
import { URL_FOR_BACK } from "../helper/URL";
import { Link } from "react-router-dom";
import { formDate } from "../helper/FormData";
import { SectionGame } from "./SectionGame";

export const BlogPostRight = () => {
  const [news, setNews] = useState<ResponseArticle[]>([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(6);

  useEffect(() => {
    getArticle(
      `${URL_FOR_BACK.URL_BASE}${URL_FOR_BACK.ARTICLE}${URL_FOR_BACK.COUNTRY}/`
    ).then((data) => setNews(data));
  }, []);

  const loadMoreNews = () => {
    setVisibleNewsCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="block_post_right">
      <div className="block_box_post">
        <h5 className="block_post_right_h5">{words.LatestGamingNews}</h5>
        <ul className="block_post_ul">
          {news.slice(0, visibleNewsCount).map((elem) => (
            <li key={elem.id} className="block_post_li">
              <Link to={`/article/${elem.url_post}`} className="block_post_a">
                <img
                  src={`${elem?.posterUrls?.posterUrl480x320}`}
                  alt={`${elem.title}`}
                  loading="lazy"
                  className="block_post_img"
                />
                <div className="block_post_li_box_right">
                  <span className="block_post_li_box_right_date">
                    {formDate(elem.atCreate)}
                  </span>
                  <span className="block_post_li_box_right_title">
                    {elem.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {visibleNewsCount < news.length && (
          <button className="block_pos_btn" onClick={loadMoreNews}>
            {words.MORE}
          </button>
        )}
      </div>
      <SectionGame />
    </div>
  );
};
