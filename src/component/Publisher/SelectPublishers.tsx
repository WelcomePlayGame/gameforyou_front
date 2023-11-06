import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from './../../helper/MethodGet'
import {BASE_URL, PUBLISHER} from "../../helper/conf"
export const SelectPublishers = ({onChange} : {onChange : (event : ChangeEvent<HTMLSelectElement>) => void})=> {
const [publishers, setPublishers] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(BASE_URL+PUBLISHER)
    .then((data)=> setPublishers(data))
}, [])

    return (
        <section className='selectCategory_container'>
            <span>Обрати Видавця</span>
            <select onChange={onChange} className='selectCategory_select'>
                {
                    publishers.map((publish)=> (
                        <option key={publish.id} value={publish.id}>
                            {publish.title}
                        </option>
                    ))
                }
            </select>
        </section>
    )
}