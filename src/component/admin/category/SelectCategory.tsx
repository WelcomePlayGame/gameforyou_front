import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from '.././../../helper/MethodGet'
import {BASE_URL, CATEGORY} from "../../../helper/conf"
export const SelectCategory = ({onChange} : {onChange : (event : ChangeEvent<HTMLSelectElement>) => void})=> {
const [category, setSelectCategory] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(BASE_URL+CATEGORY)
    .then((data)=> setSelectCategory(data))
}, [])

    return (
        <section className='selectCategory_container'>
            <span>Обрати категорію</span>
            <select onChange={onChange} className='selectCategory_select'>
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