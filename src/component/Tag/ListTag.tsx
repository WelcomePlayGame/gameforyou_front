import {useState, useEffect} from 'react'
import { URL_FOR_BACK } from '../../helper/URL'
import {getAllTag, ResponseTag } from '../../helper/MethodGet'
export const ListTag = ()=> {
    const [tags, setTags] = useState<ResponseTag []>([])

    useEffect(()=> {
        getAllTag(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.TAG+URL_FOR_BACK.COUNTRY)
    }, []);
    return (
        <section>
            {
                tags.map((tag)=> (
                    <span key={tag.id}>
                        {tag.title}
                    </span>
                ))
            }
        </section>
    )
}