import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from "../../helper/MethodGet"
import {BASE_URL, DEVOLOPER} from "../../helper/conf"
export const SelectDevolopers = ({onChange} : {onChange : (event : ChangeEvent<HTMLSelectElement>) => void})=> {
const [devolopers, setSelectDevolopers] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(BASE_URL+DEVOLOPER)
    .then((data)=> setSelectDevolopers(data))
}, [])

    return (
        <section className='selectCategory_container'>
            <span>Обрати розробника</span>
            <select onChange={onChange} className='selectCategory_select'>
                {
                    devolopers.map((devoloper)=> (
                        <option key={devoloper.id} value={devoloper.id}>
                            {devoloper.title}
                        </option>
                    ))
                }
            </select>
        </section>
    )
}