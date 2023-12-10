import { useState, useEffect, ChangeEvent } from "react";
import { getAllCategory, ResponseDataCategory } from "../../helper/MethodGet";
import words from "../../wordsvariable/WORDS";
import { URL_FOR_BACK } from "../../helper/URL";

export const SelectTag = ({
  onChange,
  language,
}: {
  onChange: (selectedOptions: string[]) => void;
  language: string;
}) => {
  const [tag, setSelectTag] = useState<ResponseDataCategory[]>([]);

  useEffect(() => {
    getAllCategory(URL_FOR_BACK.URL_BASE + URL_FOR_BACK.TAG + language).then(
      (data) => setSelectTag(data)
    );
  }, [language]);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    onChange(selectedOptions);
  };

  return (
    <section className="selectCategory_container">
      <span>{words.CHOOSE_TAG}</span>
      <select
        onChange={handleSelectChange}
        className="selectCategory_select"
        multiple
      >
        {tag.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>
    </section>
  );
};
