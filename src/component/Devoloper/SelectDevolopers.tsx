import { useState, useEffect, ChangeEvent } from "react";
import { getAllCategory, ResponseDataCategory } from "../../helper/MethodGet";
import words from "../../wordsvariable/WORDS";
import { URL_FOR_BACK } from "../../helper/URL";

export const SelectDevolopers = ({
  onChange,
  language,
}: {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  language: string;
}) => {
  const [devolopers, setSelectDevolopers] = useState<ResponseDataCategory[]>(
    []
  );

  useEffect(() => {
    getAllCategory(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.DEVELOPER + language
    ).then((data) => setSelectDevolopers(data));
  }, [language]);

  return (
    <section className="selectCategory_container">
      <span>{words.CHOOSE_DEVELOPER}</span>
      <select onChange={onChange} className="selectCategory_select" multiple>
        {devolopers.map((devoloper) => (
          <option key={devoloper.id} value={devoloper.id}>
            {devoloper.title}
          </option>
        ))}
      </select>
    </section>
  );
};
