import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from "../../helper/MethodGet"
import words from '../../wordsvariable/WORDS'
import { URL_FOR_BACK } from '../../helper/URL'

export const SelectDevolopers = ({onChange} : {onChange : (event : ChangeEvent<HTMLSelectElement>) => void})=> {
const [devolopers, setSelectDevolopers] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.DEVELOPER+URL_FOR_BACK.COUNTRY)
    .then((data)=> setSelectDevolopers(data))
}, [])

    return (
        <section className='selectCategory_container'>
            <span>{words.CHOOSE_DEVELOPER}</span>
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