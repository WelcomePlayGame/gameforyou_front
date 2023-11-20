import { useState } from "react"
import {ResponseDataCategory, addCategory} from '../../../helper/MethodPost'
import {URL_FOR_BACK} from '../../../helper/URL'
import { toast } from 'react-toastify';

export const AddPlatform = ()=> {
    const [currentLanguage, setCurrentLanguage] = useState<string>('/en')
    const [title, setTitle] = useState('');

    const platform : ResponseDataCategory  = {
        title : title,
    }


    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        try{
            await addCategory(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.PLATFORM+currentLanguage+URL_FOR_BACK.ADD, platform);
            setTitle('')
            toast.success("Категорія створена");
        } catch (error) {
            toast.error(`Така назва ${title} для категорії вже існує`)
        }
    }

    return (
        <section>
        <h4>Створення платформи</h4>
        <form className="category_form" onSubmit={handleSubmit}>
        <div className="category_form_box">
            <div className="category_form_box_top">
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Напишіть назву платформи"
                minLength={2}
                maxLength={75}
                required 
                title="Название должно содержать от 5 до 75 символов."
                className="category_form_box_top_input"
            />
            </div>
            <div className="category_form_box_bottom">
            <button type="submit" className="category_form_box_bottom_button">Додати платформу</button>
            </div>
        </div>
        </form>
    </section>
    )
}