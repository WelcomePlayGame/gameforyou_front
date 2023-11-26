import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from '.././../../helper/MethodGet'
import words from '../../../wordsvariable/WORDS'
import { URL_FOR_BACK } from '../../../helper/URL'

export const SelectCategory = ({onChange} : {onChange : (event : ChangeEvent<HTMLSelectElement>) => void})=> {
const [category, setSelectCategory] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.CATEGORY+URL_FOR_BACK.COUNTRY)
    .then((data)=> setSelectCategory(data))
}, [])

    return (
        <section className='selectCategory_container'>
            <span>{words.CHOOSE_CATEGORY}</span>
            <select onChange={onChange} className='selectCategory_select' multiple>
                {
                    category.map((cat)=> (
                        <option key={cat.id} value={cat.id}>
                            {cat.title}
                        </option>
                    ))
                }
            </select>
        </section>
    )
}