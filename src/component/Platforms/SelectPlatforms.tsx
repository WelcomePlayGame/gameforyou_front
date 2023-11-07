import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from "../../helper/MethodGet"
import {BASE_URL, PLATFORM} from "../../helper/conf"
export const SelectPlatforms = ({onChange} : {onChange : (selectedOptions : string [])=> void})=> {
const [platforms, setSelectPlatforms] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(BASE_URL+PLATFORM)
    .then((data)=> setSelectPlatforms(data))
}, [])


    const handleSelectChange = (event : ChangeEvent<HTMLSelectElement>)=> {

        const selectedOptions = Array.from(event.target.selectedOptions, option=> option.value)
        onChange(selectedOptions)
    }

    return (
        <section className='selectCategory_container'>
            <span>Обрати Платформу</span>
            <select onChange={handleSelectChange} className='selectCategory_select select_hiden' multiple required>
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