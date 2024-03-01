import { useEffect, useState } from "react";
import words from "../wordsvariable/WORDS";
import { getAllCategory, ResponseDataCategory } from "../helper/MethodGet";
import { URL_FOR_BACK } from "../helper/URL";
const Footer = () => {
  const [genres, setGenres] = useState<ResponseDataCategory[]>([]);
  const [category, setCategory] = useState<ResponseDataCategory[]>([]);
  useEffect(() => {
    getAllCategory(
      `${URL_FOR_BACK.URL_BASE}${URL_FOR_BACK.CATEGORY}${URL_FOR_BACK.COUNTRY}`
    ).then((response) => setCategory(response));
    getAllCategory(
      `${URL_FOR_BACK.URL_BASE}${URL_FOR_BACK.GENRES}${URL_FOR_BACK.COUNTRY}`
    ).then((response) => setGenres(response));
  }, []);
  function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <div className="block_footer-wrapper">
      <div className="container">
        <div className="block_footer_box">
          <div className="block_footer_left">
            <div className="block_footer_left_new_box">
              <div className="block_footer_left_new_a">
                <span className="block_footer_left_new_title"></span>
              </div>
              <div className="block_footer_left_tags_box">
                <a
                  href={`${process.env.PUBLIC_URL}/article`}
                  className="a_footer block_footer_left_tag_a"
                >
                  {words.NEWS}
                </a>
                {category.map((category) => (
                  <a
                    href=""
                    key={category.id}
                    className="block_footer_left_tag_a"
                  >
                    {capitalizeFirstLetter(category.title)}
                  </a>
                ))}
              </div>
            </div>
            <div className="block_footer_left_tags_box">
              <a
                href={`${process.env.PUBLIC_URL}/games`}
                className="block_footer_left_tag_a"
              >
                {words.GAMES}
              </a>
              {genres.map((genre) => (
                <a href="" key={genre.id} className="block_footer_left_tag_a">
                  {capitalizeFirstLetter(genre.title)}
                </a>
              ))}
            </div>
          </div>
          {/* <div className="block_footer_right">
            <div className="block_footer_right">
              <div className="block_footer_left_new_box">
                <a href="\" className="block_footer_left_new_a">
                  <span className="block_footer_left_new_title">Ігри</span>
                </a>
              </div>
              <div className="block_footer_right_tags_box">
                <a href="/news" className="block_footer_rigth_tag_a">
                  Усі
                </a>
                <a href="/news" className="block_footer_rigth_tag_a">
                  Каталог
                </a>
                <a href="/news" className="block_footer_rigth_tag_a">
                  Ігри по рейтингу
                </a>
                <a href="/news" className="block_footer_rigth_tag_a">
                  Відгуки
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
