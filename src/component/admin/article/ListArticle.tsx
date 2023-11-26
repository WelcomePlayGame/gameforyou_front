
import {useState, useEffect} from 'react'
import {getArticle, ResponseArticle} from '../../../helper/MethodGet'
import { URL_FOR_BACK } from '../../../helper/URL';
import {formDate} from '../../../helper/FormData'
import { Helmet } from 'react-helmet';
import words from '../../../wordsvariable/WORDS';
export const ListArticle = ()=> {
    const [articles, setArticles] = useState<ResponseArticle []>([]);

    useEffect(()=> {
        getArticle(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.ARTICLE+URL_FOR_BACK.COUNTRY+"/")
        .then((data)=> setArticles(data))
    }, []);

    return (
        <section className='article_list'>
            <Helmet>
                <title>{words.TITLE_LIST_ARTICLE_SEO}</title>
                <meta name="description" content={words.DES_LIST_ARTICLE_SEO} />
            </Helmet>
            <div className='article_list_box'>
                <div className='article_list_box_left'>
                {
                    articles.map((article)=> (
                        <div key={article.id} className='article_list_box_left_one'>
                            <div>
                                <a href={`${process.env.PUBLIC_URL}/article/${article.id}`} className='article_list_box_left_one_a'>
                                    <img src={ article && article.posterUrls && article.posterUrls.posterUrl480x320} alt={article && article.title} className='article_list_box_left_one_img' />
                                </a>
                            </div>
                            <div className='article_list_box_left_two'>
                                <span className='article_list_box_left_one_a_span'>{article.title.length > 30 ? article.title.slice(0,50)+" ..." : article.title}</span>
                                <span className='article_list_box_left_two_span_tag'>
                                    {article.tagSet.map((tag)=> (
                                        <span>{tag.title}</span>
                                    ))}
                                </span>
                                <div className='article_list_box_left_two_date'>
                                    <span className='article_list_box_left_two_date_span'>{formDate(article.atCreate)}</span>
                                    <span><img src='./icons/com.png' className='article_list_box_left_two_date_com' alt='comment'/></span>
                                </div>
                            </div>
                       
                        </div>
                    ))
                }
                </div>
                <div>

                </div>
            </div>
        </section>
    )
} 