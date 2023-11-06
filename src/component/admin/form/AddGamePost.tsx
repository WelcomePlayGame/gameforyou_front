import {Helmet} from 'react-helmet'
import { QuilEditor } from '../../QuilEditor/QuilEditor'
import { useState } from 'react'
import { FileCustomInput } from '../../QuilEditor/FileCustomInput'
import { SelectGenres } from '../../Genres/SelectGenres'
import { SelectDevolopers } from '../../Devoloper/SelectDevolopers'
import { SelectPublishers } from '../../Publisher/SelectPublishers'
import { SelectPlatforms } from '../../Platforms/SelectPlatforms'
import {BASE_URL} from '../../../helper/conf'

export const AddGamePost = ()=> {
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')
    const [seo_title, setSeoTitle] = useState('')
    const [seo_des, setSeoDes] = useState('')
    const [url_game, setUrlGame] = useState('')
    const [genre, setGenre] = useState('game')
    const [devoloper, setDevoloper] = useState('')
    const [publisher, setPublisher] = useState('')
    const [platform, setPlatform] = useState('')
    const [ids, setIds] = useState<number []>([])
    const [poster_480x320, setPoster_480x320] = useState <File | null>(null);
    const [poster_1024x768, setPoster_1024x768] = useState<File | null>(null);
    const [poster_1440x900, setPoster_1440x900] = useState<File | null>(null);
    const [poster_300x600, setPoster_300x600] = useState <File | null>(null);
    const [poster_200x400, setPoster_200x400] = useState<File | null>(null);
    const [poster_100x200, setPoster_100x200] = useState<File | null>(null);
    const posterPhoto_horizontal : File [] = [];
    const posterPhoto_vertical : File [] = [];
    if(poster_1440x900) {
        posterPhoto_horizontal.push(poster_1440x900)
    }
    if(poster_1024x768) {
        posterPhoto_horizontal.push(poster_1024x768);
    }
    if(poster_480x320) {
        posterPhoto_horizontal.push(poster_480x320)
    }

    if(poster_300x600) {
        posterPhoto_vertical.push(poster_300x600);
    }
    if(poster_200x400) {
        posterPhoto_vertical.push(poster_200x400);
    }
    if(poster_100x200) {
        posterPhoto_vertical.push(poster_100x200);
    }

  const  handleIdsUpdate = (id : number[]) => {
    setIds(id);
  } 

    return (
       <section className="addGamePost_container">
        <Helmet>
        <title>Додати Ігру</title>
            <meta name='Сторнінка для додавання ігри' />
        </Helmet>
        <form className='addGamePost'>
        <div className="addGamePostBox">
            <div className="addGamePostBoxSection">
            <div>
            <FileCustomInput 
                    setImageState={setPoster_300x600}
                    imageSize={
                       {
                        width : 300,
                        height: 600,
                       }
                    }
                    maxSize = {0.3}
                />
            </div>
            <div>
            <FileCustomInput 
                    setImageState={setPoster_200x400}
                    imageSize={
                       {
                        width : 200,
                        height: 400,
                       }
                    }
                    maxSize = {0.2}
                />
            </div>
            <div>
            <FileCustomInput 
                    setImageState={setPoster_100x200}
                    imageSize={
                       {
                        width : 100,
                        height: 200,
                       }
                    }
                    maxSize = {0.1}
                />
            </div>
            </div>
            <div className="addGamePostBoxSection">
            <div>
            <FileCustomInput 
                    setImageState={setPoster_1440x900}
                    imageSize={
                       {
                        width : 1440,
                        height: 900,
                       }
                    }
                    maxSize = {0.4}
                />
            </div>
            <div>
            <FileCustomInput 
                    setImageState={setPoster_1024x768}
                    imageSize={
                       {
                        width : 1024,
                        height: 768,
                       }
                    }
                    maxSize = {0.3}
                />
            </div>
            <div>
            <FileCustomInput 
                    setImageState={setPoster_480x320}
                    imageSize={
                       {
                        width : 480,
                        height: 320,
                       }
                    }
                    maxSize = {0.2}
                />
            </div>
            </div>
            <div className="addGamePostBoxSection">
            <div>
            <input
            type='text'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            minLength={4}
            maxLength={75}
            placeholder='Назва ігри'
            required
            className='addArticle_box_input'
            />
            </div>
            <div>
            <QuilEditor description={des} setDescription={setDes} onIdsUpdate={handleIdsUpdate} url={BASE_URL}/>
            </div>
            </div>
            <div className="addGamePostBoxSection">
                <div>
                    <SelectGenres onChange={(e)=> setGenre(e.target.value)}/>
                </div>
                <div>
                    <SelectDevolopers onChange={(e)=> setDevoloper(e.target.value)}/>
                </div>
                <div>
                    <SelectPublishers onChange={(e)=> setPublisher(e.target.value)}/>
                </div>
                <div>
                    <SelectPlatforms onChange={(e)=> setPlatform(e.target.value)}/>
                </div>
                <div>
                    <input
                    type='text'
                    value={seo_title}
                    onChange={(e)=>setSeoTitle(e.target.value)}
                    placeholder='Написати назву для SEO'
                    minLength={65}
                    maxLength={75}
                    required
                    className='input_seo'
                    />
                </div>
                <div>
                    <input
                    type='text'
                    value={seo_des}
                    onChange={(e)=>setSeoDes(e.target.value)}
                    placeholder='Написати опис для SEO'
                    required
                    minLength={135}
                    maxLength={165}
                    className='input_seo'
                    />
                </div>
                <div>
                    <input
                    type='text'
                    value={url_game}
                    onChange={(e)=> setUrlGame(e.target.value)}
                    placeholder='Написати сайт видавця'
                    required
                    minLength={3}
                    maxLength={40}
                    className='input_seo'
                    />
                </div>
            
            </div>
        </div>
        </form>
       </section>
    )
}