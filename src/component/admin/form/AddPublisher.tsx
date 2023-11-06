import { useState } from "react"
import {ResponseDataCategory, addCategory} from '../../../helper/MethodPost'
import {BASE_URL, PUBLISHER, ADD } from '../../../helper/conf'
import { toast } from 'react-toastify';

export const AddPublisher = ()=> {

    const [title, setTitle] = useState('');

    const publisher : ResponseDataCategory  = {
        title : title,
    }


    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        try{
            await addCategory(BASE_URL+PUBLISHER+ADD, publisher);
            setTitle('')
            toast.success("Категорія створена");
        } catch (error) {
            toast.error(`Така назва ${title} для категорії вже існує`)
        }
    }

    return (
        <section>
        <h4>Створення видавця</h4>
        <form className="category_form" onSubmit={handleSubmit}>
        <div className="category_form_box">
            <div className="category_form_box_top">
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Напишіть назву видавця"
                minLength={4}
                maxLength={75}
                required 
                title="Название должно содержать от 5 до 75 символов."
                className="category_form_box_top_input"
            />
            </div>
            <div className="category_form_box_bottom">
            <button type="submit" className="category_form_box_bottom_button">Додати видавця</button>
            </div>
        </div>
        </form>
    </section>
    )
}