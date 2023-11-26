import { useState } from "react";
import {addCategory, ResponseDataCategory} from '../../../helper/MethodPost';
import { toast } from 'react-toastify';
import {URL_FOR_BACK} from '../../../helper/URL'
import words from "../../../wordsvariable/WORDS";

export const AddTag = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>('/en')
    const [title , setTitle] = useState('');
    const tag: ResponseDataCategory = {
        title: title
    };

    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        let url = URL_FOR_BACK.URL_BASE + URL_FOR_BACK.TAG+currentLanguage+ URL_FOR_BACK.ADD
        try{
            await addCategory(url, tag);
            setTitle('')
            toast.success("Категорія створена");
        } catch (error) {
            toast.error(`Така назва ${title} для категорії вже існує`)
        }
    }
    const handleSelectLanguage = (event : React.ChangeEvent<HTMLSelectElement>  ) => {
        setCurrentLanguage(event.target.value);
    }
    

    return (
        <section>
            <div className="category_form_top">
                <div><h4>{words.CREATE_TAG}</h4></div>
                <div>
                <label htmlFor="language-select">Choose push language: </label>
            <select id="language-select" value={currentLanguage} onChange={handleSelectLanguage}>
                <option value="/ru">Русский</option>
                <option value="/pl">Польский</option>
                <option value="/en">Английский</option>
                <option value="/ua">Украинский</option>
            </select>
                </div>
                <div>Current Language : {currentLanguage.substring(1)}</div>
            </div>
            <form className="category_form" onSubmit={handleSubmit}>
            <div className="category_form_box">
                <div className="category_form_box_top">
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder={words.WRITE_NAME_TAG}
                    minLength={4}
                    maxLength={75}
                    required 
                    title="Название должно содержать от 5 до 75 символов."
                    className="category_form_box_top_input"
                />
                </div>
                <div className="category_form_box_bottom">
                <button type="submit" className="category_form_box_bottom_button">{words.SAVE_TAG}</button>
                </div>
            </div>
            </form>
        </section>
    );
}
