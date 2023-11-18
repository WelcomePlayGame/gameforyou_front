import {useState, useEffect, ChangeEvent } from 'react'
import {getAllCategory, ResponseDataCategory} from "../../helper/MethodGet"
import words from '../../wordsvariable/WORDS'
import { URL_FOR_BACK } from '../../helper/URL'

export const SelectPlatforms = ({onChange} : {onChange : (selectedOptions : string [])=> void})=> {
const [platforms, setSelectPlatforms] = useState <ResponseDataCategory [] >([])


useEffect(()=> {
    getAllCategory(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.PLATFORM+URL_FOR_BACK.COUNTRY)
    .then((data)=> setSelectPlatforms(data))
}, [])


    const handleSelectChange = (event : ChangeEvent<HTMLSelectElement>)=> {

        const selectedOptions = Array.from(event.target.selectedOptions, option=> option.value)
        onChange(selectedOptions)
    }

    return (
        <section className='selectCategory_container'>
            <span>{words.CHOOSE_PLATFORMS}</span>
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