import { useParams, Link } from "react-router-dom";
import {getGameById, Game} from '../helper/MethodGet'
import { useState, useEffect } from "react";
import { URL_FOR_BACK } from "../helper/URL";
import words from "../wordsvariable/WORDS";
import {formDate} from '../helper/FormData'
export const HeaderNews  = () => {
    const {url_post} = useParams<string>()
    const [game, setGame] = useState<Game>();
    useEffect(()=> {
        getGameById(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.GAMEPOST+URL_FOR_BACK.COUNTRY, url_post as string)
        .then((data)=> {
            setGame(data)
        })
    }, [])





    return (
        <section className="game_page">
        {/* <Helmet>
            <title>{game?.seo_title}</title>
            <meta name="description" content={game?.seo_des} />
        </Helmet> */}
        <div className="game_box_page">
        <div className="game_box_header_img"  style={{ background: `url(${game && game.posterHorizontal_uls && game.posterHorizontal_uls.poster_1024x768})` }}> </div>
        <ul className="header_game_ul article_list_box_for_game">
            <li>
            <Link className="header_game_a" to={`/game/${game?.url_post}`}>{words.HOME}</Link>
            </li>
            <li>
            <Link className="header_game_a" to={`/game/${game?.url_post}/news`}>{words.NEWS}</Link>
            </li>
            <li><Link className="header_game_a" to={`/game/${game?.url_post}/comments`}>{words.COMMENTS}</Link></li>
            <li><Link className="header_game_a" to={`/game/${game?.url_post}/blogs`}>{words.BLOGS}</Link></li>
        </ul>
        <div className='article_list_box'>
                <div className='article_list_box_left'>
                {
                    game?.articleSet.map((article)=> (
                        <div key={article.id} className='article_list_box_left_one'>
                            <div>
                                <a href={`${process.env.PUBLIC_URL}/article/${article.url_post}`} className='article_list_box_left_one_a'>
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
                                    <span><img src={`${process.env.PUBLIC_URL}/icons/com.png`} className='article_list_box_left_two_date_com' alt='comment'/></span>
                                </div>
                            </div>
                       
                        </div>
                    ))
                }
                </div>
                <div>

                </div>
            </div>
                
        </div>
     </section>
    )
}