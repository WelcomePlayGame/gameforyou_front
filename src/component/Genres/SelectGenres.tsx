import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from "../../helper/MethodGet"
import words from '../../wordsvariable/WORDS'
import { URL_FOR_BACK } from '../../helper/URL'
export const SelectGenres = ({ onChange } : { onChange: (selectedOptions: string[]) => void })=> {
const [genres, setSelectGenre] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.GENRES+URL_FOR_BACK.COUNTRY)
    .then((data)=> setSelectGenre(data))
}, [])
const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // Получение всех выбранных опций
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    // Вызов переданного обработчика onChange с новым массивом выбранных игр
    onChange(selectedOptions);
};

    return (
        <section className='selectCategory_container'>
            <span>{words.CHOOSE_GENRES}</span>
            <select onChange={handleSelectChange} className='selectCategory_select select_hiden' multiple required>
                {
                    genres.map((genre)=> (
                        <option key={genre.id} value={genre.id}>
                            {genre.title}
                        </option>
                    ))
                }
            </select>
        </section>
    )
}