import { useState, useEffect } from "react";
import { SiteMapGenerator } from "./SiteMapGenerator";
import { getSiteMap } from "../helper/MethodGet";
import { URL_FOR_BACK } from "../helper/URL";
import { url } from "inspector";

export const GeneralSiteMap = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [currentLanguage, setLanguage] = useState("/en");
  useEffect(() => {
    getSiteMap(
      `${URL_FOR_BACK.URL_BASE}${URL_FOR_BACK.SITEMAP}${currentLanguage}`
    ).then((data) => setUrls(data));
  }, [currentLanguage]);
  const handleSelectLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };
  return (
    <section className="sitemap_container">
      <div className="sitemap_box_left">
        {" "}
        <div className="addGamePostBoxSection_top_left">
          <div>
            <label htmlFor="language-select">Choose push language: </label>
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
        {urls.map((url, index) => (
          <span key={index}>{url}</span>
        ))}
      </div>
      <div>
        <SiteMapGenerator urls={urls} language={currentLanguage.slice(1)} />
      </div>
    </section>
  );
};
