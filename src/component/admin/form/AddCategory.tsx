import { useState } from "react";
import {addCategory, ResponseDataCategory} from '../../../helper/MethodPost';
import {BASE_URL, CATEGORY, ADD} from '../../../helper/conf';
import { toast } from 'react-toastify';
export const AddCategory = () => {
    const [title , setTitle] = useState('');
    const category: ResponseDataCategory = {
        title: title
    };

    const handleSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        try{
            await addCategory(BASE_URL+CATEGORY+ADD, category);

            toast.success("Категорія створена");
        } catch (error) {
            toast.error(`Така назва ${title} для категорії вже існує`)
        }
    }

    return (
        <section>
            <h4>Створення категорії</h4>
            <form className="category_form" onSubmit={handleSubmit}>
            <div className="category_form_box">
                <div className="category_form_box_top">
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Напишіть назву категорії"
                    minLength={4}
                    maxLength={75}
                    required 
                    title="Название должно содержать от 5 до 75 символов."
                    className="category_form_box_top_input"
                />
                </div>
                <div className="category_form_box_bottom">
                <button type="submit" className="category_form_box_bottom_button">Додати категорію</button>
                </div>
            </div>
            </form>
        </section>
    );
}
