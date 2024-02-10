import { Routes, Route, Navigate } from "react-router-dom";
import { AddArticle } from "./form/AddArticle";
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
import { GeneralSiteMap } from "../../Sitemap/GeneralSiteMap";
const Admin = () => {
  const isAuthenticated = sessionStorage.getItem(`isAuthenticated`) === `true`;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Routes>
        <Route path="/listcategory" element={<Category />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/listarticle" element={<ListArticleForAdmin />} />
        <Route path="/addarticle" element={<AddArticle />} />
        <Route path="/listgame" element={<ListGamePost />} />
        <Route path="/addgamepost" element={<AddGamePost />} />
        <Route path="/addgenre" element={<AddGenres />} />
        <Route path="/addplatform" element={<AddPlatform />} />
        <Route path="/addpublisher" element={<AddPublisher />} />
        <Route path="/listdeveloper" element={<ListDeveloper />} />
        <Route path="/adddeveloper" element={<AddDevoloper />} />
        <Route path="/addtag" element={<AddTag />} />
        <Route path="/sitemap" element={<GeneralSiteMap />} />
        <Route path="/updateartilce/:url_post" element={<UpdateArticle />} />
        <Route path="/updategame/:url_post" element={<UpdateGame />} />
      </Routes>
    </>
  );
};
export default Admin;
