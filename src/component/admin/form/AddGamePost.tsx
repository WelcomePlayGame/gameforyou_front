import {Helmet} from 'react-helmet'
import { QuilEditor } from '../../QuilEditor/QuilEditor'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { FileCustomInput } from '../../QuilEditor/FileCustomInput'
import { SelectGenres } from '../../Genres/SelectGenres'
import { SelectDevolopers } from '../../Devoloper/SelectDevolopers'
import { SelectPublishers } from '../../Publisher/SelectPublishers'
import { SelectPlatforms } from '../../Platforms/SelectPlatforms'
import {submitArticle} from '../../../helper/MethodPost'
import {URL_FOR_BACK} from '../../../helper/URL'
import words from '../../../wordsvariable/WORDS'

export const AddGamePost = ()=> {
    const [currentLanguage, setCurrentLanguage] = useState<string>('/ru')
    const [postUrl, setPostUrl] = useState('');
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')
    const [seo_title, setSeoTitle] = useState('')
    const [seo_des, setSeoDes] = useState('')
    const [url_game, setUrlGame] = useState('')
    const [mark, setMark] = useState('game')
    const [datatime, setDataTime] =  useState('')
    const [genresSet, setGenre] = useState<string []>([])
    const [developer, setDevoloper] = useState('')
    const [publisher, setPublisher] = useState('')
    const [platformsSet, setPlatform] = useState<string []>([])
    const [ids, setIds] = useState<number []>([])
    const [os, setOS] = useState('')
    const [minProcessor, setMinProcessor] = useState('')
    const [maxProcessor, setMaxProcessor] = useState('')
    const [minRam, setMinRam] = useState('');
    const [maxRam, setMaxRam] = useState('')
    const [directX, setDirectX] = useState('')
    const [lan, setLan] = useState('');
    const [memory , setMemory] = useState('');
    const [poster_480x320, setPoster_480x320] = useState <File | undefined>(undefined);
    const [poster_1024x768, setPoster_1024x768] = useState<File | undefined>(undefined);
    const [poster_1440x900, setPoster_1440x900] = useState<File | undefined>(undefined);
    const [poster_300x300, setPoster_300x300] = useState <File | undefined>(undefined);

    const posterPhoto_horizontal : File [] = [];
    if(poster_1440x900) {
        posterPhoto_horizontal.push(poster_1440x900)
    }
    if(poster_1024x768) {
        posterPhoto_horizontal.push(poster_1024x768);
    }
    if(poster_480x320) {
        posterPhoto_horizontal.push(poster_480x320)
    }

    
    const gamepost = {
        title : title,
        des : des,
        seo_title : seo_title,
        seo_des : seo_des,
        url_game : url_game,
        mark : mark,
        datatime : datatime,
        // genresSet : genre,
        developer : {
            id : developer,
        },
        publisher : {
            id : publisher,
        },
        // platformsSet : platform,
        os : os,
        minProcessor : minProcessor,
        maxProcessor : maxProcessor,
        minRam : minRam,
        maxRam : maxRam,
        directX : directX,
        lan : lan,
        memory : memory,
    }

  const  handleIdsUpdate = (id : number[]) => {
    setIds(id);
  } 

  const handleDateChange = (e:ChangeEvent<HTMLInputElement>)=> {
    const date = e.target.value; // получаем дату в формате YYYY-MM-DD
    const time = 'T00:00:00Z'; // добавляем время и часовой пояс UTC
    const datetime = date + time; // соединяем дату со временем
    console.log(datatime);
    setDataTime(datetime); // обновляем состояние
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let url = URL_FOR_BACK.URL_BASE + URL_FOR_BACK.GAMEPOST+"/"+currentLanguage+ URL_FOR_BACK.ADD
    
    submitArticle(gamepost, posterPhoto_horizontal, ids,url, poster_300x300, genresSet, platformsSet)
        .then(() => {
            
            console.log('Статья успешно отправлена');
            window.location.reload();
        })
        .catch((error) => {
            console.error('Ошибка при отправке статьи:', error);
        });
};

const handleSelectLanguage = (event : React.ChangeEvent<HTMLSelectElement>  ) => {
    setCurrentLanguage(event.target.value);
}


    return (
       <section className="addGamePost_container">
        <Helmet>
        <title>{words.ADD_HELMET_GAMEPOST}</title>
            <meta name={words.ADD_HELMET_GAMEPOST} />
        </Helmet>
        <form className='addGamePost' onSubmit={handleSubmit}>
        <div className="addGamePostBox">
            <div className="addGamePostBoxSection poster">
            <div>
            <FileCustomInput 
                    setImageState={setPoster_300x300}
                    file={poster_300x300}
                    imageSize={
                       {
                        width : 300,
                        height: 300,
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
                    file={poster_1440x900}
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
                    file={poster_1024x768}
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
                    file={poster_480x320}
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
            <div className='addGamePostBoxSection_top'>
            <div>
            <input
            type='text'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            minLength={4}
            maxLength={75}
            placeholder={words.TITLE_GAME}
            required
            className='addArticle_box_input'
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
            <QuilEditor description={des} 
            setDescription={setDes}
             onIdsUpdate={handleIdsUpdate} 
             url={URL_FOR_BACK.URL_BASE+URL_FOR_BACK.POST_DES_URL+currentLanguage+URL_FOR_BACK.ADD} 
             url_delete={URL_FOR_BACK.URL_BASE+URL_FOR_BACK.POST_DES_URL+currentLanguage} />
            </div>
            </div>
            <div className="addGamePostBoxSection">
                <div>
                    <SelectGenres onChange={(e)=> setGenre(e)}/>
                </div>
                <div>
                    <SelectDevolopers onChange={(e)=> setDevoloper(e.target.value)}/>
                </div>
                <div>
                    <SelectPublishers onChange={(e)=> setPublisher(e.target.value)}/>
                </div>
                <div>
                    <SelectPlatforms onChange={(e)=> setPlatform(e)}/>
                </div>
                <div>
                    <input
                    type='text'
                    value={seo_title}
                    onChange={(e)=>setSeoTitle(e.target.value)}
                    placeholder={words.TITLE_SEO_ARTICLE}
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
                    placeholder={words.DES_SEO_ARTICLE}
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
                    placeholder={words.URL_PUBLISHER}
                    required
                    minLength={3}
                    maxLength={40}
                    className='input_seo'
                    />
                </div>
            <div>
                <input
                type='date'
                value={datatime.substring(0,10)}
                onChange={handleDateChange}
                name='datatime'
                id='datatime'
                className='input_seo'
                required
                />
            </div>
            </div>
        </div>
        <div className='addGamePostBox_bottom'>
                    <div>
                    <div className='addGamePostBox_bottom_input'>
                        <input
                        type='text'
                        value={os}
                        name={os}
                        placeholder={words.OS}
                        onChange={(e)=> setOS(e.target.value)}
                        minLength={4}
                        maxLength={20}
                        required
                        className='input_seo input_bottom'
                        />
                    </div>
                    <div className='addGamePostBox_bottom_input'>
                        <input
                        type='text'
                        value={minProcessor}
                        name={minProcessor}
                        placeholder={words.MIN_CPU}
                        onChange={(e)=> setMinProcessor(e.target.value)}
                        minLength={4}
                        maxLength={20}
                        required
                        className='input_seo input_bottom'
                        />
                    </div>
                    <div className='addGamePostBox_bottom_input'>
                        <input
                        type='text'
                        value={maxProcessor}
                        name={maxProcessor}
                        placeholder={words.MAX_CPU}
                        onChange={(e)=> setMaxProcessor(e.target.value)}
                        minLength={4}
                        maxLength={20}
                        required
                        className='input_seo input_bottom'
                        />
                    </div>
                    <div className='addGamePostBox_bottom_input'>
                        <input
                        type='text'
                        value={minRam}
                        name={minRam}
                        placeholder={words.MIN_RAM}
                        onChange={(e)=> setMinRam(e.target.value)}
                        minLength={4}
                        maxLength={20}
                        required
                        className='input_seo input_bottom'
                        />
                    </div>
                    </div>
                   <div>
                   <div className='addGamePostBox_bottom_input'>
                        <input
                        type='text'
                        value={maxRam}
                        name={maxRam}
                        placeholder={words.MAX_RAM}
                        onChange={(e)=> setMaxRam(e.target.value)}
                        minLength={4}
                        maxLength={20}
                        required
                        className='input_seo input_bottom'
                        />
                    </div>
                    <div className='addGamePostBox_bottom_input'>
                        <input
                        type='text'
                        value={directX}
                        name={directX}
                        placeholder={words.DRIVERS}
                        onChange={(e)=> setDirectX(e.target.value)}
                        minLength={4}
                        maxLength={20}
                        required
                        className='input_seo input_bottom'
                        />
                    </div>
                    <div className='addGamePostBox_bottom_input'>
                        <input
                        type='text'
                        value={lan}
                        name={lan}
                        placeholder={words.NETWORK}
                        onChange={(e)=> setLan(e.target.value)}
                        minLength={4}
                        maxLength={20}
                        required
                        className='input_seo input_bottom'
                        />
                    </div>
                    <div className='addGamePostBox_bottom_input'>
                        <input
                        type='text'
                        value={memory}
                        name={memory}
                        placeholder={words.SPACE_DISK}
                        onChange={(e)=> setMemory(e.target.value)}
                        minLength={4}
                        maxLength={20}
                        required
                        className='input_seo input_bottom'
                        />
                    </div>
                   </div>
        </div>
        <button type='submit'>{words.SAVE_ARTICLE}</button>
        </form>
       </section>
    )
}