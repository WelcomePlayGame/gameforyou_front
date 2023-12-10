import { useState, useEffect, ChangeEvent } from "react";
import { getAllCategory, ResponseDataCategory } from "./../../helper/MethodGet";
import words from "../../wordsvariable/WORDS";
import { URL_FOR_BACK } from "../../helper/URL";

export const SelectPublishers = ({
  onChange,
  language,
}: {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  language: string;
}) => {
  const [publishers, setPublishers] = useState<ResponseDataCategory[]>([]);

  useEffect(() => {
    getAllCategory(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.PUBLISHER + language
    ).then((data) => setPublishers(data));
  }, [language]);

  return (
    <section className="selectCategory_container">
      <span>{words.CHOOSE_PUBLISHER}</span>
      <select onChange={onChange} className="selectCategory_select">
        {publishers.map((publish) => (
          <option key={publish.id} value={publish.id}>
            {publish.title}
          </option>
        ))}
      </select>
    </section>
  );
};
