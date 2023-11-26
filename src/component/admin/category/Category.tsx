import { useEffect, useState } from "react"
import {getAllCategory, ResponseDataCategory} from '../../../helper/MethodGet'
import { URL_FOR_BACK } from "../../../helper/URL"

export const Category = ()=> {

    const [categororyList , setCategoryList] = useState <ResponseDataCategory []> ([])

    useEffect(()=> {
        getAllCategory(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.CATEGORY+URL_FOR_BACK.COUNTRY)
        .then((data)=> setCategoryList(data))
    }, [])
    
    return (

        <section>
            {
                categororyList.map((category) => (
                    <div key={category.title}>
                        {category.title}
                    </div>
                ))
            }
        </section>
    )
}