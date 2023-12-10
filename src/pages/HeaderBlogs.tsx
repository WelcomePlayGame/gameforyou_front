
import { useParams, Link } from "react-router-dom";
import {getGameById, Game} from '../helper/MethodGet'
import { useState, useEffect } from "react";
import { URL_FOR_BACK } from "../helper/URL";
import words from "../wordsvariable/WORDS";

export const HeaderBlogs = ()=> {
    const {url_post} = useParams<string>()
    const [game, setGame] = useState<Game>();
    useEffect(()=> {
        getGameById(URL_FOR_BACK.URL_BASE+URL_FOR_BACK.GAMEPOST+URL_FOR_BACK.COUNTRY, url_post!)
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
            {
              game?.articleSet && Object.keys(game.articleSet).length > 0  &&(
                <li>
                <Link className="header_game_a" to={`/game/${game?.url_post}/news`}>{words.NEWS}</Link>
                </li>
              )
            }
            {
              game?.commentSet && Object.keys(game.commentSet).length > 0 && (
             <li><Link className="header_game_a" to={`/game/${game.url_post}/comments`}>{words.COMMENTS}</Link></li>
             )
            }

            {
              game?.blogSet && Object.keys(game.blogSet).length > 0 && (
                <li><Link className="header_game_a" to={`/game/${game?.url_post}/blogs`}>{words.BLOGS}</Link></li>
              )
            }
        </ul>
        <div className="game_box_body">
              {
                game?.blogSet && (
                    <div>
                        {
                            game.blogSet.map((blog)=> (
                                <div key={blog.id}>
                                    <span>{blog.title}</span>
                                </div>
                            ))
                        }
                    </div>
                )
              }
        </div>
        </div>
     </section>
    )
}