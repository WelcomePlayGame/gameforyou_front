import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { QuilEditor } from "../../QuilEditor/QuilEditor";
import { SelectCategory } from "../Category/SelectCategory";
import { submitArticle } from "../../../helper/MethodPost";
import { getArticleById, ResponseArticle } from "../../../helper/MethodGet";
import { URL_FOR_BACK } from "../../../helper/URL";
import { FileCustomInput } from "../../QuilEditor/FileCustomInput";
import { SelectGame } from "../../GamePost/SelectGame";
import words from "../../../wordsvariable/WORDS";
import { SelectTag } from "../../Tag/SelectTag";
import { transliterate } from "transliteration";

export const UpdateArticle = () => {
  const [artcleOld, setArticleOld] = useState<ResponseArticle>();
  const { url_post } = useParams();
  useEffect(() => {
    getArticleById(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.ARTICLE + URL_FOR_BACK.COUNTRY,
      url_post as string
    ).then((data) => setArticleOld(data));
  }, [url_post]);
  const [currentLanguage, setCurrentLanguage] = useState<string>("/en");
  const [title, setTitle] = useState(artcleOld?.title as string);
  const [des, setDes] = useState(artcleOld?.des as string);
  const [seo_des, setSeo_des] = useState(artcleOld?.seo_des as string);
  const [seo_title, setSeo_title] = useState(artcleOld?.seo_title as string);
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
  const article = {
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
    submitArticle(
      article,
      posterPhoto,
      ids,
      URL_FOR_BACK.URL_BASE +
        URL_FOR_BACK.ARTICLE +
        currentLanguage +
        URL_FOR_BACK.ADD,
      tagSet
    )
      .then(() => {
        // window.location.reload();
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

  return <section></section>;
};
