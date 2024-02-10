import { useParams, Link } from "react-router-dom";
import { getGameById, Game } from "../helper/MethodGet";
import { useState, useEffect } from "react";
import { URL_FOR_BACK } from "../helper/URL";
import { Helmet } from "react-helmet";
import words from "../wordsvariable/WORDS";
const HeaderComments = () => {
  const { url_post } = useParams<string>();
  const [game, setGame] = useState<Game>();
  useEffect(() => {
    getGameById(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.GAMEPOST + URL_FOR_BACK.COUNTRY,
      url_post!
    ).then((data) => {
      setGame(data);
    });
  }, []);

  return (
    <section className="game_page">
      <Helmet>
        <title>{`${game?.title}: ${words.TITLE_COMMENTS_BY_GAME}`}</title>
        <meta
          name="description"
          content={`${game?.title}: ${words.DES_COMMENTS_BY_GAME}`}
        />
      </Helmet>
      <div className="game_box_page">
        <div
          className="game_box_header_img"
          style={{
            background: `url(${
              game &&
              game.posterHorizontal_uls &&
              game.posterHorizontal_uls.poster_1024x768
            })`,
          }}
        >
          {" "}
        </div>
        <ul className="header_game_ul article_list_box_for_game">
          <li>
            <Link className="header_game_a" to={`/game/${game?.url_post}`}>
              {words.HOME}
            </Link>
          </li>
          {game?.articleSet && Object.keys(game.articleSet).length > 0 && (
            <li>
              <Link
                className="header_game_a"
                to={`/game/${game?.url_post}/news`}
              >
                {words.NEWS}
              </Link>
            </li>
          )}
          {game?.commentSet && Object.keys(game.commentSet).length > 0 && (
            <li>
              <Link
                className="header_game_a"
                to={`/game/${game.url_post}/comments`}
              >
                {words.COMMENTS}
              </Link>
            </li>
          )}

          {game?.blogSet && Object.keys(game.blogSet).length > 0 && (
            <li>
              <Link
                className="header_game_a"
                to={`/game/${game?.url_post}/blogs`}
              >
                {words.BLOGS}
              </Link>
            </li>
          )}
        </ul>
        <div className="game_box_body">
          {game?.commentSet && (
            <div>
              {game.commentSet.map((comment) => (
                <div key={comment.id} className="list_comment_for_game">
                  {Number(comment.rating) === 0 ? (
                    "Нет рейтинга"
                  ) : (
                    <span>{comment.rating}</span>
                  )}
                  <span>{comment.title_comment}</span>
                  <span>{comment.des_comment}</span>
                  <span>
                    {comment.negativeInputs.map((negative, index) => (
                      <span key={index}>{negative}</span>
                    ))}
                  </span>
                  <span>
                    {comment.positiveInputs.map((positive, index) => (
                      <span key={index}>{positive}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default HeaderComments;
