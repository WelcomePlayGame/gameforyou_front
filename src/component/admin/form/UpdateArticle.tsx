import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { QuilEditor } from "../../QuilEditor/QuilEditor";
import { SelectCategory } from "../Category/SelectCategory";
import { updatetArticle } from "../../../helper/MethodPost";
import { getArticleById } from "../../../helper/MethodGet";
import { URL_FOR_BACK } from "../../../helper/URL";
import { FileCustomInput } from "../../QuilEditor/FileCustomInput";
import { SelectGame } from "../../GamePost/SelectGame";
import words from "../../../wordsvariable/WORDS";
import { SelectTag } from "../../Tag/SelectTag";

export const UpdateArticle = () => {
  const { url_post } = useParams();
  const [currentLanguage, setCurrentLanguage] = useState<string>("/en");
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [seo_des, setSeo_des] = useState("");
  const [seo_title, setSeo_title] = useState("");

  const [mark, setMark] = useState("news");
  const [category, setCategory] = useState("");
  const [gamePost, setGamePost] = useState("");
  const [tagSet, setTagset] = useState<string[]>([]);
  const [poster_480x320, setPoster_480x320] = useState<File | undefined>(
    undefined
  );
  const [poster_1024x768, setPoster_1024x768] = useState<File | undefined>(
    undefined
  );
  const posterPhoto: File[] = [];
  const [ids, setIds] = useState<number[]>([]);
  useEffect(() => {
    getArticleById(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.ARTICLE + URL_FOR_BACK.COUNTRY,
      url_post as string
    ).then((data) => {
      setTitle(data.title);
      setSeo_des(data.seo_des);
      setSeo_title(data.seo_title);
      setDes(data.des);
      setId(Number(data.id));
    });
  }, [url_post, currentLanguage]);
  const article = {
    id: id,
    title: title,
    des: des,
    seo_title: seo_title,
    seo_des: seo_des,
    mark: mark,
    url_post: url_post,
    category: {
      id: category,
    },
    gamePost: {
      id: gamePost,
    },
  };

  if (poster_480x320) {
    posterPhoto.push(poster_480x320);
  }
  if (poster_1024x768) {
    posterPhoto.push(poster_1024x768);
  }

  const handleIdsUpdate = (ids: number[]) => {
    setIds(ids);
  };

  const handlSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updatetArticle(
      article,
      posterPhoto,
      ids,
      URL_FOR_BACK.URL_BASE +
        URL_FOR_BACK.ARTICLE +
        currentLanguage +
        URL_FOR_BACK.UPDATE,
      tagSet
    )
      .then(() => {
        // window.location.href = `${process.env.PUBLIC_URL}/admin/listarticle`;
      })
      .catch((error) => {
        console.error("Ошибка при отправке статьи:", error);
      });
  };

  const handleSelectLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <section className="addcategory">
      <Helmet>
        <title>Update Article</title>
        <meta name="Add Article" />
      </Helmet>
      <form className="addArticle" onSubmit={handlSubmit}>
        <div className="addArticle_box">
          <div className="addArticle_box_secton">
            <div className="file_box_custom"></div>
            <div>
              <FileCustomInput
                setImageState={setPoster_1024x768}
                file={poster_1024x768}
                imageSize={{ width: 1024, height: 768 }}
                maxSize={0.12}
              />
            </div>
            <div>
              <FileCustomInput
                setImageState={setPoster_480x320}
                file={poster_480x320}
                imageSize={{ width: 480, height: 320 }}
                maxSize={0.05}
              />
            </div>
          </div>
          <div className="addArticle_box_secton">
            <div className="article_title_box">
              <div className="addGamePostBoxSection_top_left">
                <input
                  type="text"
                  value={title}
                  minLength={4}
                  maxLength={75}
                  onChange={(e) => setTitle(e.target.value)}
                  className="addArticle_box_input"
                />
              </div>
              <div className="addGamePostBoxSection_top_left">
                <div>
                  <label htmlFor="language-select">
                    Choose push language:{" "}
                  </label>
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
                <div>Current language: {`${currentLanguage.substring(1)}`}</div>
              </div>
            </div>
            <div>
              <QuilEditor
                description={des}
                setDescription={setDes}
                onIdsUpdate={handleIdsUpdate}
                url={
                  URL_FOR_BACK.URL_BASE +
                  URL_FOR_BACK.ARTICLE_DES_URL +
                  URL_FOR_BACK.COUNTRY +
                  URL_FOR_BACK.ADD
                }
                url_delete={
                  URL_FOR_BACK.URL_BASE +
                  URL_FOR_BACK.ARTICLE_DES_URL +
                  URL_FOR_BACK.COUNTRY
                }
                currentLanguage={currentLanguage}
              />
            </div>
          </div>
          <div className="addCategory_box_secton">
            <div className="addCategory_box_secton_right">
              <SelectTag
                onChange={(e) => setTagset(e)}
                language={currentLanguage}
              />
              <SelectCategory
                onChange={(e) => setCategory(e.target.value)}
                language={currentLanguage}
              />
            </div>
            <div>
              <SelectGame
                onChange={(e) => setGamePost(e.target.value)}
                language={currentLanguage}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={words.TITLE_SEO_ARTICLE}
                name={seo_title}
                value={seo_title}
                minLength={40}
                maxLength={75}
                required
                onChange={(e) => setSeo_title(e.target.value)}
                className="input_seo"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={words.DES_SEO_ARTICLE}
                name={seo_des}
                value={seo_des}
                minLength={130}
                max={150}
                required
                onChange={(e) => setSeo_des(e.target.value)}
                className="input_seo"
              />
            </div>
            <button type="submit" className="addArticle_btn">
              {"Update"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
