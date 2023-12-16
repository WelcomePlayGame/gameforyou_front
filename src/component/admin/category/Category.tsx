import { useEffect, useState } from "react";
import {
  getAllCategory,
  ResponseDataCategory,
} from "../../../helper/MethodGet";
import { URL_FOR_BACK } from "../../../helper/URL";
import words from "../../../wordsvariable/WORDS";

export const Category = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("/en");
  const [categororyList, setCategoryList] = useState<ResponseDataCategory[]>(
    []
  );

  useEffect(() => {
    getAllCategory(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.CATEGORY + currentLanguage
    ).then((data) => setCategoryList(data));
  }, [currentLanguage]);
  const handleSelectLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentLanguage(event.target.value);
  };
  return (
    <section>
      <div className="category_form_top">
        <div>
          <h4>{words?.CATEGORY}</h4>
        </div>
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
        <div>Current Language : {currentLanguage.substring(1)}</div>
      </div>
      {categororyList.map((category) => (
        <div key={category.title}>{category.title}</div>
      ))}
    </section>
  );
};
