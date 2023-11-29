import {useState} from 'react'
import {Helmet} from 'react-helmet'
import {QuilEditor} from '../../QuilEditor/QuilEditor'
import { SelectCategory } from '../Category/SelectCategory'
import {submitArticle} from "../../../helper/MethodPost"
import {URL_FOR_BACK} from '../../../helper/URL'
import { FileCustomInput } from '../../QuilEditor/FileCustomInput';
import { SelectGame } from '../../GamePost/SelectGame'
import words from '../../../wordsvariable/WORDS'
import { SelectTag } from '../../Tag/SelectTag'

export const AddArticle = ()=> {
    const [currentLanguage, setCurrentLanguage] = useState<string>('/en')
    const [title, setTitle] = useState('')
    const [des,  setDes] = useState('')
    const [seo_des, setSeo_des] = useState('');
    const [seo_title, setSeo_title] = useState('')
    const [mark, setMark] = useState('news')
    const [category, setCategory] = useState('')
    const [gamePost, setGamePost] = useState('')
    const [tagSet, setTagset] = useState<string []>([])
    const [poster_480x320, setPoster_480x320] = useState <File | undefined>(undefined);
    const [poster_1024x768, setPoster_1024x768] = useState<File | undefined>(undefined);
    const [poster_1440x900, setPoster_1440x900] = useState<File | undefined>(undefined);
    const posterPhoto  : File [] = [];
    const [ids, setIds] = useState<number []>([])
    const article = {
        title : title,
        des: des,
        seo_title : seo_title,
        seo_des : seo_des,
        mark : mark,
        category : {
            id : category
        },
        gamePost : {
            id : gamePost
        }
    }

   if(poster_480x320) {
    posterPhoto.push(poster_480x320);
   }
   if(poster_1024x768) {
    posterPhoto.push(poster_1024x768);
   }
   if(poster_1440x900) {
    posterPhoto.push(poster_1440x900);
   }

   const  handleIdsUpdate = (ids : number [])=> {
    setIds(ids);
  } 

   const  handlSubmit = (event : React.FormEvent)=> {
    event.preventDefault();
    submitArticle(article,posterPhoto, ids, URL_FOR_BACK.URL_BASE+URL_FOR_BACK.ARTICLE+currentLanguage+URL_FOR_BACK.ADD, tagSet);
    
    }

    const handleSelectLanguage = (event : React.ChangeEvent<HTMLSelectElement>  ) => {
        setCurrentLanguage(event.target.value);
    }

    return (
     <section className='addcategory'>
        <Helmet>
            <title>{words.ADD_ARTICLE}</title>
            <meta name='Сторнінка для додавання категорії' />
        </Helmet>
        <form className='addArticle' onSubmit={handlSubmit}>
        <div className="addArticle_box">
        <div className="addArticle_box_secton">
        <div className='file_box_custom'>
        <FileCustomInput
        setImageState={setPoster_1440x900}
        file={poster_1440x900}
        imageSize={{width : 1440, height : 900}}
        maxSize={0.5}
        />
        </div>
        <div>
        <FileCustomInput
        setImageState={setPoster_1024x768}
        file={poster_1024x768}
        imageSize={{width : 1024, height : 768}}
        maxSize={0.5}
        />
        </div>
        <div>
        <FileCustomInput
        setImageState={setPoster_480x320}
        file={poster_480x320}
        imageSize={{width : 480, height : 320}}
        maxSize={0.5}
        />
        </div>

        </div>
        <div className="addArticle_box_secton">
        <div className='article_title_box'>
        <div>
            <input
                type="text"
                name='title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder={words.TITLE_ARTICLE}
                id='title'
                className='addArticle_box_input'
                min={5}
                maxLength={75}
                required
            />
            </div>
            <div>
            <label htmlFor="language-select">Choose push language: </label>
            <select id="language-select" value={currentLanguage} onChange={handleSelectLanguage}>
                <option value="/ru">Русский</option>
                <option value="/pl">Польский</option>
                <option value="/en">Английский</option>
                <option value="/ua">Украинский</option>
            </select>
            </div>
            <div>Current language: {`${currentLanguage.substring(1)}`}</div>
        </div>
            <div>
                <QuilEditor 
                description={des}
                 setDescription={setDes} 
                 onIdsUpdate={handleIdsUpdate} 
                 url={URL_FOR_BACK.URL_BASE+URL_FOR_BACK.ARTICLE_DES_URL+URL_FOR_BACK.COUNTRY+URL_FOR_BACK.ADD} 
                 url_delete={URL_FOR_BACK.URL_BASE+URL_FOR_BACK.ARTICLE_DES_URL+URL_FOR_BACK.COUNTRY}
                 currentLanguage={currentLanguage}
                 />
            </div>
        </div>
        <div className="addCategory_box_secton">
        <div className='addCategory_box_secton_right'>
        <SelectTag
            onChange={(e)=> setTagset(e)}
        />
        <SelectCategory
            onChange={(e)=> setCategory(e.target.value) }
        />
        </div>
        <div>
            <SelectGame
            onChange={(e) => setGamePost(e.target.value)}
            />
        </div>
        <div>
            <input
            type="text"
            placeholder={words.TITLE_SEO_ARTICLE}
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
            placeholder={words.DES_SEO_ARTICLE} 
            name={seo_des}
            value={seo_des}
            minLength={135}
            max={150}
            required
            onChange={(e)=>setSeo_des(e.target.value)}
            className='input_seo'
             />
        </div>
        <button type='submit' className='addArticle_btn'>{words.SAVE_ARTICLE}</button>
        </div>
       </div>
        </form>
     </section>
    )
}