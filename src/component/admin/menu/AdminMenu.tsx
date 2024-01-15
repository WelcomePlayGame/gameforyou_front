import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Site } from "./Site";
import { GeneralLink } from "./GeneralLink";
import { Profile } from "./Profile";
import { GeneralSiteMap } from "../../../Sitemap/GeneralSiteMap";

export const AdminMenu = () => {
  const location = useLocation();
  const isAdminMenu = location.pathname.startsWith("/admin");
  const [isDrop, setDrop] = useState(true);
  const [isCategoryDrop, setIsCategoryDrop] = useState(true);

  const hideMenu = () => {
    setDrop(true);
  };

  const showpMenu = () => {
    setDrop(false);
  };

  const showCategoryMenu = () => {
    setIsCategoryDrop(false);
  };

  const hideCategoryMenu = () => {
    setIsCategoryDrop(true);
  };

  return (
    <>
      {isAdminMenu && (
        <header className="admin_box">
          <menu className="menu_for_admin">
            <div>
              <Site />
            </div>
            <div>
              <GeneralLink />
            </div>
            <div>
              <Profile />
            </div>
            <div>
              <Link to={`/admin/sitemap`}>Sitemap</Link>
            </div>
          </menu>
        </header>
      )}
    </>
  );
};
