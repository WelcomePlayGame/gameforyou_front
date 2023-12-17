import { Routes, Route } from "react-router-dom";
import { AddArticle } from "./form/AddArticle";
import { Article } from "./article/Article";
import { Category } from "./Category/Category";
import { AddCategory } from "./form/AddCategory";
import { AddGamePost } from "./form/AddGamePost";
import { AddGenres } from "./form/AddGenres";
import { AddPlatform } from "./form/AddPlatform";
import { AddPublisher } from "./form/AddPublisher";
import { AddDevoloper } from "./form/AddDevoloper";
import { AddTag } from "./form/AddTag";
import { ListDeveloper } from "../Devoloper/ListDeveloper ";
import { ListGamePost } from "../GamePost/ListGamePost";
import { ListArticleForAdmin } from "./article/ListArticleForAdmin";
import { UpdateArticle } from "./form/UpdateArticle";
import { UpdateGame } from "./form/UpdateGame";
export const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/listcategory" element={<Category />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/listarticle" element={<ListArticleForAdmin />} />
        <Route path="/addarticle" element={<AddArticle />} />
        <Route path="/updateartilce/:url_post" element={<UpdateArticle />} />
        <Route path="/updategame/:url_post" element={<UpdateGame />} />
        <Route path="/listgame" element={<ListGamePost />} />
        <Route path="/addgamepost" element={<AddGamePost />} />
        <Route path="/addgenre" element={<AddGenres />} />
        <Route path="/addplatform" element={<AddPlatform />} />
        <Route path="/addpublisher" element={<AddPublisher />} />
        <Route path="/listdeveloper" element={<ListDeveloper />} />
        <Route path="/adddeveloper" element={<AddDevoloper />} />
        <Route path="/addtag" element={<AddTag />} />
      </Routes>
    </>
  );
};
