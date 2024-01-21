import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getAllCategory, ResponseDataCategory } from "../../helper/MethodGet";
import { URL_FOR_BACK } from "../../helper/URL";
import words from "../../wordsvariable/WORDS";
import { Link } from "react-router-dom";
import { env } from "process";

export const SlideCaruselGame = ({
  series_games,
}: {
  series_games: string;
}) => {
  const [games, setGames] = useState<ResponseDataCategory[]>([]);

  useEffect(() => {
    getAllCategory(
      ` ${URL_FOR_BACK.URL_BASE}${URL_FOR_BACK.GAMEPOST}${URL_FOR_BACK.COUNTRY}/?series_games=${series_games}`
    ).then((data) => setGames(data));
  }, []);

  return (
    <section>
      <Swiper
        slidesPerView={3}
        // spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <div className="box_game slide_container">
              <img
                src={game.posterVertical_urs?.poster_300x300}
                alt={game.title}
                className="box_game_img"
                loading="lazy"
              />
              <span className="games_list_title">{game.title}</span>
              <span className="games_list_span">
                <a
                  href={`${process.env.PUBLIC_URL}/game/${game.url_post}`}
                  className="games_list_btn"
                >
                  {words.DETAILS}
                </a>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
