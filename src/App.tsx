import "./App.css";
import { Header } from "./component/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminMenu } from "./component/admin/menu/AdminMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotFound } from "./component/404/NotFound";
import { Security } from "./component/admin/security/Security";
import React, { Suspense } from "react";
const Body = React.lazy(() => import("./pages/Body.tsx"));
const ListGame = React.lazy(() => import("./list/ListGame.tsx"));
const ListArticle = React.lazy(
  () => import("./component/admin/article/ListArticle.tsx")
);
const Admin = React.lazy(() => import("./component/admin/Admin.tsx"));
const HeaderGame = React.lazy(() => import("./pages/HeaderGame.tsx"));
const HeaderNews = React.lazy(() => import("./pages/HeaderNews.tsx"));
const HeaderComments = React.lazy(() => import("./pages/HeaderComments.tsx"));
const HeaderBlogs = React.lazy(() => import("./pages/HeaderBlogs.tsx"));
const Article = React.lazy(
  () => import("./component/admin/article/Article.tsx")
);
const RSS = React.lazy(() => import("./component/RSS.tsx"));
function App() {
  const basenameMap = {
    UA: "/ua",
    RU: "/ru",
    EN: "/en",
    PL: "/pl",
  };

  const getBasename = (lang: string | undefined) => {
    const defaultBasename = "";
    if (lang && Object.hasOwnProperty.call(basenameMap, lang)) {
      return basenameMap[lang as keyof typeof basenameMap];
    }
    return defaultBasename;
  };

  const basename = getBasename(process.env.REACT_APP_LANGUAGE);

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter basename={basename}>
        <Header />
        <AdminMenu />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Body />
              </Suspense>
            }
          />
          <Route
            path="/games"
            element={
              <Suspense>
                <ListGame />
              </Suspense>
            }
          />
          <Route
            path="/article"
            element={
              <Suspense>
                <ListArticle />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFound />} />
          <Route
            path="/game/:url_post"
            element={
              <Suspense>
                <HeaderGame />
              </Suspense>
            }
          />
          <Route
            path="/game/:url_post/news"
            element={
              <Suspense>
                <HeaderNews />
              </Suspense>
            }
          />
          <Route
            path="/game/:url_post/comments"
            element={
              <Suspense>
                <HeaderComments />
              </Suspense>
            }
          />
          <Route
            path="/game/:url_post/blogs"
            element={
              <Suspense>
                <HeaderBlogs />
              </Suspense>
            }
          />
          <Route
            path="/article/:url_post"
            element={
              <Suspense>
                <Article />
              </Suspense>
            }
          />
          <Route path="/login" element={<Security />} />
          <Route
            path="/admin/*"
            element={
              <Suspense>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path="/rss"
            element={
              <Suspense>
                <RSS />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
