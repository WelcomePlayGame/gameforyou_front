
import {URL_FOR_BACK} from '../../../helper/URL'
import words from '../../../wordsvariable/WORDS'
import {getArticleById, ResponseArticle} from '../../../helper/MethodGet'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
export const Article = ()=> {
const [article, setArticle] = useState<ResponseArticle>();
const {id} = useParams()
useEffect(()=> {
    getArticleById(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.ARTICLE+URL_FOR_BACK.COUNTRY, Number(id))
    .then((data)=> setArticle(data))
}, []);
const createMarkup = (html : string) => ({ __html: html });
    return (
        <>
        <section>
        <Helmet>
            <title>{article?.seo_title}</title>
            <meta name="description" content={article?.seo_des} />
          </Helmet>
        <picture>
                        <source
                        media="(min-width:1440px)"
                        srcSet={`${article?.posterUrls.posterUrl1440x900}`}
                        type="image/webp" 
                       
                        />
                        <source 
                        media="(min-width:991px)"
                        srcSet={`${article?.posterUrls?.posterUrl1024x768}`} 
                        type="image/webp"
                    
                        />
                        <source
                        media="(max-width:767px)"
                        srcSet={`${article?.posterUrls?.posterUrl480x320}`}
                        type="image/webp" 
                        />
                        <img
                        src={`${article?.posterUrls.posterUrl1024x768}`}
                        alt={article?.title} 
                        loading="lazy"
                        className="game_header_img"
                    />
                    </picture>
        <div className='article_box_inf'>
        <h1 className='article_page_h1'>{article?.title}</h1>
        <div dangerouslySetInnerHTML={typeof article?.des === 'string' ? createMarkup(article.des) : undefined} className='article_page_des'></div>
        </div>            
        </section>
        </>
    )
}