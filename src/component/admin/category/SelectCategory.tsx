import { useState, useEffect, ChangeEvent } from "react";
import {
  getAllCategory,
  ResponseDataCategory,
} from ".././../../helper/MethodGet";
import words from "../../../wordsvariable/WORDS";
import { URL_FOR_BACK } from "../../../helper/URL";

export const SelectCategory = ({
  onChange,
  language,
}: {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  language: string;
}) => {
  const [category, setSelectCategory] = useState<ResponseDataCategory[]>([]);

  useEffect(() => {
    getAllCategory(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.CATEGORY + language
    ).then((data) => setSelectCategory(data));
  }, [language]);

  return (
    <section className="selectCategory_container">
      <span>{words.CHOOSE_CATEGORY}</span>
      <select onChange={onChange} className="selectCategory_select" multiple>
        {category.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>
    </section>
  );
};
