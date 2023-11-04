import {useState} from 'react'
import {Helmet} from 'react-helmet'
import {QuilEditor} from '../../QuilEditor/QuilEditor'
import { SelectCategory } from '../Category/SelectCategory'
import { toast } from 'react-toastify';
import {submitArticle} from "../../../helper/MethodPost"
import {BASE_URL, ARTICLE, ADD} from '../../../helper/conf';
import { useLocation } from 'react-router-dom';
import path from 'path';
import { FileCustomInput } from '../../QuilEditor/FileCustomInput';
export const AddArticle = ()=> {
    const location = useLocation();
    const isPath = location.pathname.startsWith("/addarticle")
    const [title, setTitle] = useState('')
    const [des,  setDes] = useState('')
    const [seo_des, setSeo_des] = useState('');
    const [seo_title, setSeo_title] = useState('')
    const [mark, setMark] = useState('')
    const [category, setCategory] = useState('')
    const [poster_480x320, setPoster_480x320] = useState <File | null>(null);
    const [poster_1024x768, setPoster_1024x768] = useState<File | null>(null);
    const [poster_1440x900, setPoster_1440x900] = useState<File | null>(null);
    const posterFiles : File [] = [];
    const [ids, setIds] = useState<number []>([])
    const article = {
        title : title,
        des: des,
        seo_title : seo_title,
        seo_des : seo_des,
        mark : mark,
        category : category,
    }

   if(poster_480x320) {
    posterFiles.push(poster_480x320);
   }
   if(poster_1024x768) {
    posterFiles.push(poster_1024x768);
   }
   if(poster_1440x900) {
    posterFiles.push(poster_1440x900);
   }

   const  handleIdsUpdate = (ids : number [])=> {
    if(isPath) {
        setMark('news');
    } else {
        setMark('');
    }
    setIds(ids);
  } 

   const  handlSubmit = ()=> {
    submitArticle(article, posterFiles, ids, BASE_URL+ARTICLE+ADD);
    }


    return (
     <section className='addcategory'>
        <Helmet>
            <title>Додати категорію</title>
            <meta name='Сторнінка для додавання категорії' />
        </Helmet>
        <form className='addArticle' onSubmit={handlSubmit}>
        <div className="addArticle_box">
        <div className="addArticle_box_secton">
        <div className='file_box_custom'>
        <FileCustomInput
        setImageState={setPoster_1440x900}
        imageSize={{width : 1440, height : 900}}
        maxSize={0.7}
        />
        </div>
        <div>
        <FileCustomInput
        setImageState={setPoster_1024x768}
        imageSize={{width : 1024, height : 768}}
        maxSize={0.4}
        />
        </div>
        <div>
        <FileCustomInput
        setImageState={setPoster_480x320}
        imageSize={{width : 480, height : 320}}
        maxSize={0.2}
        />
        </div>

        </div>
        <div className="addArticle_box_secton">
            <div>
            <input
                type="text"
                name='title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder='Назва посту'
                id='title'
                className='addArticle_box_input'
                min={5}
                maxLength={75}
                required
            />
            </div>
            <div>
                <QuilEditor description={des} setDescription={setDes} onIdsUpdate={handleIdsUpdate} />
            </div>
        </div>
        <div className="addCategory_box_secton">
        <div className='addCategory_box_secton_right'>
        <SelectCategory
            onChange={(e)=> setCategory(e.target.value)}
        />
        </div>
        <div>
            <input
            type="text"
            placeholder='Назва статьї для SEO'
            name={seo_title}
            value={seo_title}
            minLength={65}
            maxLength={75}
            required
            onChange={(e)=>setSeo_title(e.target.value)}
            className='input_seo'
            />
        </div>
        <div>
            <input
            type="text"
            placeholder='Опис статьї для SEO' 
            name={seo_des}
            value={seo_des}
            minLength={135}
            max={150}
            required
            onChange={(e)=>setSeo_des(e.target.value)}
            className='input_seo'
             />
        </div>
        <button type='submit' className='addArticle_btn'>Зберегти статью</button>
        </div>
       </div>
        </form>
     </section>
    )
}