import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from "../../helper/MethodGet"
import {BASE_URL, GENRE} from "../../helper/conf"
export const SelectGenres = ({ onChange } : { onChange: (selectedOptions: string[]) => void })=> {
const [genres, setSelectGenre] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(BASE_URL+GENRE)
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
            <span>Обрати жанр</span>
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