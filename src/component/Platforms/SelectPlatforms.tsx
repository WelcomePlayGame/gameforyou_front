import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from "../../helper/MethodGet"
import {BASE_URL, PLATFORM} from "../../helper/conf"
export const SelectPlatforms = ({onChange} : {onChange : (event : ChangeEvent<HTMLSelectElement>) => void})=> {
const [platforms, setSelectPlatforms] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(BASE_URL+PLATFORM)
    .then((data)=> setSelectPlatforms(data))
}, [])

    return (
        <section className='selectCategory_container'>
            <span>Обрати Платформу</span>
            <select onChange={onChange} className='selectCategory_select'>
                {
                    platforms.map((platform)=> (
                        <option key={platform.id} value={platform.id}>
                            {platform.title}
                        </option>
                    ))
                }
            </select>
        </section>
    )
}