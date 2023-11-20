
import {LanguageCode} from '../component/Header'
interface SelectLanguageProps {
    onSelect: (code: string) => void; 
    currentLanguage: LanguageCode; 
  }
const languages = {
    en: `${process.env.PUBLIC_URL}/flags/en.png`,
    ru: `${process.env.PUBLIC_URL}/flags/ru.png`,
    ua: `${process.env.PUBLIC_URL}/flags/ua.png`,
    pl: `${process.env.PUBLIC_URL}/flags/pl.png`
  };

export const SelectLanguage : React.FC<SelectLanguageProps> = ({onSelect, currentLanguage})=> {

    return (
      <div>
      <ul className="select_language_ul">
        {Object.entries(languages).map(([code, imagePath]) => {
          // Фильтруем текущий язык, чтобы он не отображался в списке
          if (code !== currentLanguage) {
            return (
              <li key={code} onClick={() => onSelect(code)}>
                <img src={imagePath} alt={code} className='flag-size' />
              </li>
            );
          }
          return null; // Ничего не возвращаем, если это текущий язык
        })}
      </ul>
    </div>
    )
}