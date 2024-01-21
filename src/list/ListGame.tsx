import { useState, useEffect } from "react";
import { getAllCategory, ResponseDataCategory } from "../helper/MethodGet";
import { URL_FOR_BACK } from "../helper/URL";
import words from "../wordsvariable/WORDS";
import { Link } from "react-router-dom";
export const ListGame = () => {
  interface Game {
    id: number;
    title: string;
    url_post: string;
    posterVertical_urs?: { id: number; poster_300x300: string };
  }

  const [games, setGames] = useState<ResponseDataCategory[]>([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(8);
  const loadMoreNews = () => {
    setVisibleNewsCount((prevCount) => prevCount + 8);
  };
  useEffect(() => {
    getAllCategory(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.GAMEPOST + URL_FOR_BACK.COUNTRY + "/"
    ).then((data) => setGames(data));
  }, []);

  return (
    <section className="games_list">
      <div className="games_list">
        {games.slice(0, visibleNewsCount).map((game: Game) => (
          <div key={game.id}>
            <div className="box_game">
              <img
                src={game.posterVertical_urs?.poster_300x300}
                alt={game.title}
                className="box_game_img"
                loading="lazy"
              />
              <span className="games_list_title">{game.title}</span>
              <span className="games_list_span">
                <Link to={`/game/${game.url_post}`} className="games_list_btn">
                  {words.DETAILS}
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="btn_game_list" onClick={loadMoreNews}>
        {words.BTN_GAME_LIST}
      </button>
    </section>
  );
};
