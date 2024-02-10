import { getAllCategory, ResponseDataCategory } from "../helper/MethodGet";
import { URL_FOR_BACK } from "../helper/URL";
import words from "../wordsvariable/WORDS";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
const SectionGame = () => {
  const [games, setGames] = useState<ResponseDataCategory[]>([]);

  useEffect(() => {
    getAllCategory(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.GAMEPOST + URL_FOR_BACK.COUNTRY + "/"
    ).then((data) => setGames(data));
  }, []);
  return (
    <section className="section_game_container">
      <div className="section_game_container_top">
        {games.slice(0, 3).map((game) => (
          <div key={game.id} className="section_game_box">
            <Link to={`/game/${game.url_post}`}>
              <img
                src={`${game.posterVertical_urs?.poster_300x300}`}
                alt={game.title}
                className="section_game_img"
                loading="lazy"
              />
            </Link>
          </div>
        ))}
        {/* <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {games.map((game) => (
            <SwiperSlide key={game.id} className="section_game_box">
              <Link to={`/game/${game.url_post}`}>
                <img
                  src={`${game.posterVertical_urs?.poster_300x300}`}
                  alt={game.title}
                  className="section_game_img"
                  loading="lazy"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
      <Link to={`/games`} className="section_game_a">
        <span className="section_game_a_span">{words.GAMES_REVIEWS}</span>
      </Link>
    </section>
  );
};

export default SectionGame;
