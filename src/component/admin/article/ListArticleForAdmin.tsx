import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { deleteArticle } from "../../../helper/MethodPost";
import {
  getAllCategory,
  ResponseDataCategory,
} from "../../../helper/MethodGet";
import { URL_FOR_BACK } from "../../../helper/URL";
import words from "../../../wordsvariable/WORDS";
import { Link } from "react-router-dom";
export const ListArticleForAdmin = () => {
  const [listArticle, setListArticle] = useState<ResponseDataCategory[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState<string>("/en");
  useEffect(() => {
    getAllCategory(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.ARTICLE + currentLanguage + "/"
    ).then((data) => setListArticle(data));
  }, [currentLanguage]);
  const handleSelectLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <section>
      <Helmet>
        <title>List Article</title>
        <meta name="List Article" />
      </Helmet>
      <div className="category_form_top">
        <div>
          <h4>List Game</h4>
        </div>
        <div>
          <label htmlFor="language-select">Choose push language: </label>
          <select
            id="language-select"
            value={currentLanguage}
            onChange={handleSelectLanguage}
          >
            <option value="/ru">Русский</option>
            <option value="/pl">Польский</option>
            <option value="/en">Английский</option>
            <option value="/ua">Украинский</option>
          </select>
        </div>
        <div>Current Language : {currentLanguage.substring(1)}</div>
      </div>
      <table className="list_developer_table">
        <thead></thead>
        <tbody>
          {listArticle.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>
                <a href={`${currentLanguage}/article/${article.url_post}`}>
                  link
                </a>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteArticle(
                      URL_FOR_BACK.URL_BASE +
                        URL_FOR_BACK.ARTICLE +
                        currentLanguage +
                        URL_FOR_BACK.DELETE,
                      article.id
                    );
                    // window.location.reload();
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/admin/updateartilce/${article.url_post}`}>
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
