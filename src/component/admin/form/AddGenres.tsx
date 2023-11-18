import { useState } from "react"
import {ResponseDataCategory, addCategory} from '../../../helper/MethodPost'
import {URL_FOR_BACK} from '../../../helper/URL'
import { toast } from 'react-toastify';

export const AddGenres = ()=> {

    const [title, setTitle] = useState('');

    const genre : ResponseDataCategory  = {
        title : title,
    }


    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        try{
            await addCategory(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.GENRES+URL_FOR_BACK.COUNTRY+URL_FOR_BACK.ADD, genre);
            setTitle('')
            toast.success("Категорія створена");
        } catch (error) {
            toast.error(`Така назва ${title} для категорії вже існує`)
        }
    }

    return (
        <section>
        <h4>Створення жанру</h4>
        <form className="category_form" onSubmit={handleSubmit}>
        <div className="category_form_box">
            <div className="category_form_box_top">
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Напишіть назву жанру"
                minLength={4}
                maxLength={75}
                required 
                title="Название должно содержать от 5 до 75 символов."
                className="category_form_box_top_input"
            />
            </div>
            <div className="category_form_box_bottom">
            <button type="submit" className="category_form_box_bottom_button">Додати жанр</button>
            </div>
        </div>
        </form>
    </section>
    )
}