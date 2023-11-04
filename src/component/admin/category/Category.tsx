import { useEffect, useState } from "react"
import {getAllCategory, ResponseDataCategory} from '../../../helper/MethodGet'
import {BASE_URL, CATEGORY} from '../../../helper/conf'
import { error } from "console"
export const Category = ()=> {

    const [categororyList , setCategoryList] = useState <ResponseDataCategory []> ([])

    useEffect(()=> {
        getAllCategory(BASE_URL+CATEGORY)
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