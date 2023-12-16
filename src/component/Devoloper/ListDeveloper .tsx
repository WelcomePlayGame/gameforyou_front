import { URL_FOR_BACK } from "../../helper/URL";
import words from "../../wordsvariable/WORDS";
import { useEffect, useState } from "react";
import { getAllGeneral, IGeneral } from "../../helper/MethodGet";
export const ListDeveloper = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("/en");
  const [listDeveloper, setListDeveloper] = useState<IGeneral[]>([]);
  useEffect(() => {
    getAllGeneral(
      URL_FOR_BACK.URL_BASE + URL_FOR_BACK.DEVELOPER + currentLanguage
    ).then((data) => setListDeveloper(data));
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
      <table className="list_developer_table">
        <tbody>
          {listDeveloper.map((developer) => (
            <tr key={developer.id}>
              <td>{developer.id}</td>
              <td>{developer.title}</td>
              <td>
                <a
                  href={`${process.env.PUBLIC_URL}/admin/updatedeveloper/${developer.id}`}
                >
                  Update
                </a>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
