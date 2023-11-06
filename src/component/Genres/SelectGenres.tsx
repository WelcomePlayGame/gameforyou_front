import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from "../../helper/MethodGet"
import {BASE_URL, GENRE} from "../../helper/conf"
export const SelectGenres = ({onChange} : {onChange : (event : ChangeEvent<HTMLSelectElement>) => void})=> {
const [genres, setSelectGenre] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(BASE_URL+GENRE)
    .then((data)=> setSelectGenre(data))
}, [])

    return (
        <section className='selectCategory_container'>
            <span>Обрати жанр</span>
            <select onChange={onChange} className='selectCategory_select'>
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