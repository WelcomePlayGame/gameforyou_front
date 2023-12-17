import { URL_FOR_BACK } from "../../helper/URL";
import words from "../../wordsvariable/WORDS";
import { useEffect, useState } from "react";
import { getAllCategory, ResponseDataCategory } from "../../helper/MethodGet";
import { Link } from "react-router-dom";
export const ListGamePost = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("/en");
  const [listGame, setListGame] = useState<ResponseDataCategory[]>([]);
  useEffect(() => {
    getAllCategory(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.GAMEPOST + currentLanguage + `/`
    ).then((data) => setListGame(data));
  }, [currentLanguage]);
  const handleSelectLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentLanguage(event.target.value);
  };
  return (
    <section>
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
        <thead className="list_developer_thead">
          <tr>
            <td>№</td>
            <td>Title</td>
            <td>Language</td>
            <td>Update post for game</td>
            <td>Delete this game</td>
          </tr>
        </thead>
        <tbody>
          {listGame.map((game) => (
            <tr key={game.id}>
              <td>{game.id}</td>
              <td>
                <a
                  href={`${currentLanguage}/game/${game.url_post}`}
                  target="_blanck"
                >
                  {game.title}
                </a>
              </td>
              <td>{currentLanguage.substring(1)}</td>
              <td>
                <Link to={`/admin/updategame/${game.url_post}`}>Update</Link>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
