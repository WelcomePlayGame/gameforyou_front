import { useState } from "react";
import words from "../../../wordsvariable/WORDS";

export const GeneralLink = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDevoloper, setIsDevoloper] = useState<boolean>(false);
  const [isPublisher, setIsPublisher] = useState<boolean>(false);
  const [isGenre, setIsGenre] = useState<boolean>(false);
  const [isPlatform, setIsPlatform] = useState<boolean>(false);
  const [isCategory, setIsCategory] = useState<boolean>(false);

  const toggleDropDown = (): void => {
    setIsOpen(!isOpen);
  };
  const toggleDropDownDevoloper = (): void => {
    setIsDevoloper(!isDevoloper);
  };
  const toggleDropPublisher = (): void => {
    setIsPublisher(!isPublisher);
  };
  const toggleDropGenre = (): void => {
    setIsGenre(!isGenre);
  };
  const toggleDropPlatform = (): void => {
    setIsPlatform(!isPlatform);
  };
  const toggleDropCategory = (): void => {
    setIsCategory(!isCategory);
  };
  return (
    <div>
      <span className="menu_link" onClick={toggleDropDown}>
        {words.CONTENT}
      </span>
      {isOpen && (
        <div className="dropdown_menu">
          <span
            className="menu_link general_link"
            onClick={toggleDropDownDevoloper}
          >
            {words.DEVOLOPER}
          </span>
          {isDevoloper && (
            <div className="dropdown_menu_devoloper">
              <span className="menu_link general_link">
                <a
                  href={`${process.env.PUBLIC_URL}/admin/listdeveloper`}
                  className="menu_link general_link_dev"
                >
                  {words.LIST_DEVOLOPER}
                </a>
              </span>
              <span className="menu_link general_link">
                <a
                  href={`${process.env.PUBLIC_URL}/admin/adddeveloper`}
                  className="menu_link general_link_dev"
                >
                  {words.ADD_DEVOLOPER}
                </a>
              </span>
            </div>
          )}
          <span
            className="menu_link general_link"
            onClick={toggleDropPublisher}
          >
            {words.PUBLISHER}
          </span>
          {isPublisher && (
            <div className="dropdown_menu_devoloper">
              <span className="menu_link general_link">
                <a
                  href={`${process.env.PUBLIC_URL}/admin/listpublisher`}
                  className="menu_link general_link_dev"
                >
                  {words.LIST_PUBLISHER}
                </a>
              </span>
              <span className="menu_link general_link">
                <a
                  href={`${process.env.PUBLIC_URL}/admin/addpublisher`}
                  className="menu_link general_link_dev"
                >
                  {words.ADD_PUBLISHER}
                </a>
              </span>
            </div>
          )}
          <span className="menu_link general_link" onClick={toggleDropGenre}>
            {words.GENRE}
          </span>
          {isGenre && (
            <div className="dropdown_menu_devoloper">
              <span className="menu_link general_link">
                <a
                  href={`${process.env.PUBLIC_URL}/admin/listgenre`}
                  className="menu_link general_link_dev"
                >
                  {words.LIST_GENRE}
                </a>
              </span>
              <span className="menu_link general_link">
                <a
                  href={`${process.env.PUBLIC_URL}/admin/addgenre`}
                  className="menu_link general_link_dev"
                >
                  {words.ADD_GENRE}
                </a>
              </span>
            </div>
          )}
          <span className="menu_link general_link" onClick={toggleDropPlatform}>
            {words.PLATFORM}
          </span>
          {isPlatform && (
            <div className="dropdown_menu_devoloper">
              <span className="menu_link general_link">
                <a
                  href={`${process.env.PUBLIC_URL}/admin/listpatform`}
                  className="menu_link general_link_dev"
                >
                  {words.LIST_PLATFORM}
                </a>
              </span>
              <span className="menu_link general_link">
                <a
                  href={`${process.env.PUBLIC_URL}/admin/addplatform`}
                  className="menu_link general_link_dev"
                >
                  {words.ADD_PLATFORM}
                </a>
              </span>
            </div>
          )}
          <span className="menu_link general_link" onClick={toggleDropCategory}>
            {words.CATEGORY}
          </span>
          {isCategory && (
            <div className="dropdown_menu_devoloper">
              <span className="menu_link general_link">
                <a
                  href={`${process.env.PUBLIC_URL}/admin/addcategory`}
                  className="menu_link general_link_dev"
                >
                  {words.ADD_CATEGORY}
                </a>
              </span>
              <span className="menu_link general_link">
                <a
                  href={`${process.env.PUBLIC_URL}/admin/listcategory`}
                  className="menu_link general_link_dev"
                >
                  {words.LIST_CATEGORY}
                </a>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
